import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllMonsters, getMonsterById, addMonster, updateMonster } from './monster.service.ts'
import { MonstersParams, addMonsterBody, updateMonsterBody } from './types.ts'

async function getAllMonstersHandler(req: FastifyRequest, reply: FastifyReply) {
  const monsters = await getAllMonsters()
  return reply.send(monsters)
}

async function getMonsterByIdHandler(
  request: FastifyRequest<{ Params: MonstersParams }>,
  reply: FastifyReply,
) {
  const id = Number(request.params.id)
  if (isNaN(id)) {
    return reply.code(400).send({ error: 'Invalid ID' })
  }

  const monster = await getMonsterById(id)

  if (!monster) {
    return reply.code(404).send({ error: 'Monster not found' })
  }

  return reply.send(monster)
}

async function addMonsterHandler(
  request: FastifyRequest<{ Body: addMonsterBody }>,
  reply: FastifyReply,
) {
  const monster = request.body

  await addMonster(monster)

  reply.code(201)
  return request.body
}

export async function updateMonsterHandler(
  req: FastifyRequest<{
    Params: MonstersParams
    Body: updateMonsterBody
  }>,
  reply: FastifyReply,
) {
  const id = Number(req.params.id)
  if (isNaN(id)) {
    return reply.status(400).send({ error: 'Invalid ID' })
  }

  const updated = await updateMonster(id, req.body)

  if (!updated) {
    return reply.status(404).send({ error: 'Monster not found' })
  }

  return reply.send(updated)
}
export { getAllMonstersHandler, getMonsterByIdHandler, addMonsterHandler }

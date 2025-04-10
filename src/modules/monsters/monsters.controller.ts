import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllMonsters, getMonsterById, addMonster } from './monster.service.ts'
import { MonstersParams, addMonsterBody } from './types.ts'

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

export { getAllMonstersHandler, getMonsterByIdHandler, addMonsterHandler }

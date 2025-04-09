import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllMonsters } from './monster.service.ts'

export async function getAllMonstersHandler(req: FastifyRequest, reply: FastifyReply) {
  const monsters = await getAllMonsters()
  return reply.send(monsters)
}

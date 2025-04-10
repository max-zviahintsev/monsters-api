import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllConditions } from './lives.service.ts'

async function getAllConditionsHandler(req: FastifyRequest, reply: FastifyReply) {
  const conditions = await getAllConditions()
  return reply.send(conditions)
}

export { getAllConditionsHandler }

import { FastifyReply, FastifyRequest } from 'fastify'
import { getAllHabitats } from './habitats.service.ts'

async function getAllHabitatsHandler(req: FastifyRequest, reply: FastifyReply) {
  const habitats = await getAllHabitats()
  return reply.send(habitats)
}

export { getAllHabitatsHandler }

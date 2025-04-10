import { FastifyInstance } from 'fastify'
import { getAllHabitatsHandler } from './habitats.controller.ts'
import { getHabitatsSchema } from './habitats.schemas.ts'

async function getHabitatsRoute(fastify: FastifyInstance) {
  fastify.get('/habitats', { schema: getHabitatsSchema }, getAllHabitatsHandler)
}

export { getHabitatsRoute }

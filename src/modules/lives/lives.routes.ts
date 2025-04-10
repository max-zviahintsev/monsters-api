import { FastifyInstance } from 'fastify'
import { getAllConditionsHandler } from './lives.controller.ts'
import { getConditionsSchema } from './lives.schemas.ts'

async function getConditionsRoute(fastify: FastifyInstance) {
  fastify.get('/conditions', { schema: getConditionsSchema }, getAllConditionsHandler)
}

export { getConditionsRoute }

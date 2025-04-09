import { FastifyInstance } from 'fastify'
import { getAllMonstersHandler } from './monsters.controller.ts'

export async function getMonstersRoute(fastify: FastifyInstance) {
  const opts = {
    schema: {
      response: {
        200: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              personality: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  }
  fastify.get('/monsters', opts, getAllMonstersHandler)
}

import { FastifyInstance } from 'fastify'
import { getAllMonstersHandler, getMonsterByIdHandler } from './monsters.controller.ts'

async function getMonstersRoute(fastify: FastifyInstance) {
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

async function getMonsterByIdRoute(fastify: FastifyInstance) {
  const opts = {
    schema: {
      params: {
        type: 'object',
        properties: {
          id: { type: 'string' },
        },
      },
    },
  }
  fastify.get('/monsters/:id', opts, getMonsterByIdHandler)
}

export { getMonstersRoute, getMonsterByIdRoute }

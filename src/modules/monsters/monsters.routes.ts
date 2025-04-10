import { FastifyInstance } from 'fastify'
import {
  getAllMonstersHandler,
  getMonsterByIdHandler,
  addMonsterHandler,
} from './monsters.controller.ts'

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

async function addMonsterRoute(fastify: FastifyInstance) {
  const opts = {
    schema: {
      body: {
        type: 'object',
        required: ['name', 'personality'],
        additionalProperties: false,
        properties: {
          name: {
            type: 'string',
          },
          personality: {
            type: 'string',
          },
        },
      },
      response: {
        201: {
          type: 'object',
          properties: {
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
  }

  fastify.post('/monsters', opts, addMonsterHandler)
}

export { getMonstersRoute, getMonsterByIdRoute, addMonsterRoute }

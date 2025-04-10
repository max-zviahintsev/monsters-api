import { FastifyInstance } from 'fastify'
import {
  getAllMonstersHandler,
  getMonsterByIdHandler,
  addMonsterHandler,
  updateMonsterHandler,
  deleteMonsterHandler,
} from './monsters.controller.ts'
import {
  getMonstersSchema,
  getMonsterByIdSchema,
  addMonsterSchema,
  updateMonsterSchema,
  deleteMonsterSchema,
} from './monsters.schemas.ts'

async function getMonstersRoute(fastify: FastifyInstance) {
  fastify.get('/monsters', { schema: getMonstersSchema }, getAllMonstersHandler)
}

async function getMonsterByIdRoute(fastify: FastifyInstance) {
  fastify.get('/monsters/:id', { schema: getMonsterByIdSchema }, getMonsterByIdHandler)
}

async function addMonsterRoute(fastify: FastifyInstance) {
  fastify.post('/monsters', { schema: addMonsterSchema }, addMonsterHandler)
}

async function updateMonsterRoute(fastify: FastifyInstance) {
  fastify.put('/monsters/:id', { schema: updateMonsterSchema }, updateMonsterHandler)
}

async function deleteMonsterRoute(fastify: FastifyInstance) {
  fastify.delete('/monsters/:id', { schema: deleteMonsterSchema }, deleteMonsterHandler)
}

export {
  getMonstersRoute,
  getMonsterByIdRoute,
  addMonsterRoute,
  updateMonsterRoute,
  deleteMonsterRoute,
}

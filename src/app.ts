import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'node:http'
// import { seed } from './db/seed.ts'
import {
  getMonstersRoute,
  getMonsterByIdRoute,
  addMonsterRoute,
  updateMonsterRoute,
  deleteMonsterRoute,
} from './modules/monsters/monsters.routes.ts'
import { getHabitatsRoute } from './modules/habitats/habitats.routes.ts'
import { getConditionsRoute } from './modules/lives/lives.routes.ts'

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify({
  logger: {
    transport: {
      target: '@fastify/one-line-logger',
    },
  },
})

app.get('/ping', async () => 'pong\n')

//await seed()

// ROUTES
await app.register(getMonstersRoute)
await app.register(getMonsterByIdRoute)
await app.register(addMonsterRoute)
await app.register(updateMonsterRoute)
await app.register(deleteMonsterRoute)
await app.register(getHabitatsRoute)
await app.register(getConditionsRoute)

export default app

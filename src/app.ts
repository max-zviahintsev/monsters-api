import fastify, { FastifyInstance } from 'fastify'
import { Server, IncomingMessage, ServerResponse } from 'node:http'
// import { seed } from './db/seed.ts'
import { getMonstersRoute, getMonsterByIdRoute } from './modules/monsters/monsters.routes.ts'

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

export default app

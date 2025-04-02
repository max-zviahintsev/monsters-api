import { serial, pgTable, varchar } from 'drizzle-orm/pg-core'

export const monsters = pgTable('monsters', {
  id: serial(),
  name: varchar({ length: 50 }),
  personality: varchar({ length: 50 }),
})

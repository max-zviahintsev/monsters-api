import { serial, pgTable, varchar, integer } from 'drizzle-orm/pg-core'

export const habitats = pgTable('habitats', {
  id: serial(),
  name: varchar({ length: 50 }),
  climate: varchar({ length: 50 }),
  temperature: integer(),
})

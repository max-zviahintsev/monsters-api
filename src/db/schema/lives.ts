import { pgTable, varchar } from 'drizzle-orm/pg-core'

export const lives = pgTable('lives', {
  monster: varchar({ length: 50 }),
  habitat: varchar({ length: 50 }),
})

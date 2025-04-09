import { asc } from 'drizzle-orm'
import { db } from '../../db/connection.ts'
import { monsters } from '../../db/schema/monsters.ts'

export async function getAllMonsters() {
  return db.select().from(monsters).orderBy(asc(monsters.id))
}

import { asc, eq } from 'drizzle-orm'
import { db } from '../../db/connection.ts'
import { monsters } from '../../db/schema/monsters.ts'
import { addMonsterBody } from './types.ts'

export async function getAllMonsters() {
  return db.select().from(monsters).orderBy(asc(monsters.id))
}
export async function getMonsterById(id: number) {
  const result = await db.select().from(monsters).where(eq(monsters.id, id))
  return result[0] ?? null
}
export async function addMonster(data: addMonsterBody) {
  const [monster] = await db.insert(monsters).values(data).returning()
  return monster
}

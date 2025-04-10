import { asc, eq } from 'drizzle-orm'
import { db } from '../../db/connection.ts'
import { monsters } from '../../db/schema/monsters.ts'
import { addMonsterBody, updateMonsterBody } from './types.ts'

async function getAllMonsters() {
  return db.select().from(monsters).orderBy(asc(monsters.id))
}

async function getMonsterById(id: number) {
  const result = await db.select().from(monsters).where(eq(monsters.id, id))
  return result[0] ?? null
}

async function addMonster(data: addMonsterBody) {
  const [monster] = await db.insert(monsters).values(data).returning()
  return monster
}

async function updateMonster(id: number, updates: updateMonsterBody) {
  const existing = await db.select().from(monsters).where(eq(monsters.id, id))

  if (existing.length === 0) return null
  const [updated] = await db.update(monsters).set(updates).where(eq(monsters.id, id)).returning()

  return updated
}

async function deleteMonster(id: number) {
  const result = await db.delete(monsters).where(eq(monsters.id, id)).returning()
  return result.length > 0
}

export { getAllMonsters, getMonsterById, addMonster, updateMonster, deleteMonster }

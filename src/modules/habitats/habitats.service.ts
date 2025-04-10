import { asc } from 'drizzle-orm'
import { db } from '../../db/connection.ts'
import { habitats } from '../../db/schema/habitats.ts'

async function getAllHabitats() {
  return db.select().from(habitats).orderBy(asc(habitats.id))
}

export { getAllHabitats }

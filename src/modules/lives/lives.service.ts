import { lives } from '../../db/schema/lives.ts'
import { habitats } from '../../db/schema/habitats.ts'
import { eq } from 'drizzle-orm'
import { db } from '../../db/connection.ts'

async function getAllConditions() {
  return db
    .select({
      id: habitats.id,
      habitat: habitats.name,
      climate: habitats.climate,
      temperature: habitats.temperature,
      monster: lives.monster,
    })
    .from(lives)
    .innerJoin(habitats, eq(habitats.name, lives.habitat))
}

export { getAllConditions }

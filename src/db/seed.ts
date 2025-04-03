import { db } from './connection.ts'
import { monsters } from './schema/monsters.ts'
import { habitats } from './schema/habitats.ts'
import { lives } from './schema/lives.ts'

export async function seed() {
  await db.insert(monsters).values([
    { name: 'Fluffy', personality: 'aggressive' },
    { name: 'Noodles', personality: 'impatient' },
    { name: 'Rusty', personality: 'passionate' },
  ])
  await db.insert(habitats).values([
    { name: 'desert', climate: 'dry', temperature: 100 },
    { name: 'forest', climate: 'haunted', temperature: 70 },
    { name: 'mountain', climate: 'icy', temperature: 30 },
  ])
  await db.insert(lives).values([
    { monster: 'Fluffy', habitat: 'desert' },
    { monster: 'Noodles', habitat: 'forest' },
    { monster: 'Rusty', habitat: 'mountain' },
  ])
}

export type MonstersParams = {
  id: string
}

export type addMonsterBody = {
  name: string
  personality: string
}

export type updateMonsterBody = {
  name?: string
  personality?: string
}

const getMonstersSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          personality: {
            type: 'string',
          },
        },
      },
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
}

const getMonsterByIdSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
}

const addMonsterSchema = {
  body: {
    type: 'object',
    required: ['name', 'personality'],
    additionalProperties: false,
    properties: {
      name: {
        type: 'string',
      },
      personality: {
        type: 'string',
      },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        personality: {
          type: 'string',
        },
      },
    },
  },
}

const updateMonsterSchema = {
  body: {
    type: 'object',
    additionalProperties: false,
    properties: {
      name: { type: 'string' },
      personality: { type: 'string' },
    },
  },
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        personality: { type: 'string' },
      },
    },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
}

const deleteMonsterSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string' },
    },
  },
  response: {
    204: { type: 'null' },
    404: {
      type: 'object',
      properties: {
        error: { type: 'string' },
      },
    },
  },
}

export {
  getMonstersSchema,
  getMonsterByIdSchema,
  addMonsterSchema,
  updateMonsterSchema,
  deleteMonsterSchema,
}

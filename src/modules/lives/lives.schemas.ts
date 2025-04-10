const getConditionsSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          habitat: {
            type: 'string',
          },
          climate: {
            type: 'string',
          },
          temperature: {
            type: 'number',
          },
          monster: {
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

export { getConditionsSchema }

import { defineType, defineField } from 'sanity'

export const CardGroup = defineType({
  title: 'Group of cards',
  name: 'cardGroup',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    // TODO: Should there be a maximum allowed number of cards?
    defineField({
      title: 'Text',
      name: 'content',
      type: 'array',
      of: [{ type: 'card' }],
    }),
  ],
})

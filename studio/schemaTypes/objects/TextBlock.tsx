import { defineType, defineField } from 'sanity'

export const TextBlock = defineType({
  title: 'Text',
  name: 'textBlock',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
    }),
    defineField({
      title: 'Text',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})

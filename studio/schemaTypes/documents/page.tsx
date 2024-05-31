import { defineType, defineField } from 'sanity'

export const Page = defineType({
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'textBlock' }, { type: 'cardGroup' }],
    }),
  ],
})

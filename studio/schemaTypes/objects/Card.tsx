import { defineType, defineField } from 'sanity'

export const Card = defineType({
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    defineField({
      type: 'imageWithAlt',
      name: 'image',
      title: 'Image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Ingress',
      name: 'ingress',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Link',
      name: 'link',
      type: 'reference',
      to: [{ type: 'page' }],
      validation: (rule) => rule.required(),
    }),
  ],
})

import { defineType, defineField } from 'sanity'

export const Home = defineType({
  title: 'Home',
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
  ],
})

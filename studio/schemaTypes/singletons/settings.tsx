import { defineType, defineField } from 'sanity'

export const Settings = defineType({
  title: 'Site settings',
  name: 'settings',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Menu items',
      description: '',
      type: 'array',
      of: [
        {
          title: 'Reference',
          type: 'reference',
          to: [
            {
              type: 'home',
            },
            {
              type: 'page',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site settings',
      }
    },
  },
})

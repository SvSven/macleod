import { defineType, defineField } from 'sanity'
import { componentBackgrounds } from '../../src/colors'

export const Home = defineType({
  title: 'Home',
  name: 'home',
  type: 'document',
  fieldsets: [
    {
      name: 'header',
      title: 'Header',
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
      fieldset: 'header',
    }),
    defineField({
      type: 'text',
      name: 'headerIngress',
      title: 'Text',
      validation: (rule) => rule.required(),
      fieldset: 'header',
    }),
    defineField({
      type: 'imageWithAlt',
      name: 'headerImage',
      title: 'Header image',
      validation: (rule) => rule.required(),
      fieldset: 'header',
    }),
    defineField({
      type: 'object',
      name: 'headerCta',
      title: 'Call to action',
      fields: [
        defineField({
          type: 'string',
          name: 'label',
          title: 'Button label',
          validation: (rule) => rule.required(),
        }),
        defineField({
          type: 'reference',
          name: 'link',
          title: 'Link',
          to: [{ type: 'page' }],
          validation: (rule) => rule.required(),
          options: { disableNew: true },
        }),
      ],
      options: { columns: 2 },
      fieldset: 'header',
    }),
    defineField({
      type: 'colorlist',
      name: 'headerBackgroundColor',
      title: 'Background color',
      options: {
        colors: componentBackgrounds,
      },
      validation: (rule) => rule.required(),
      fieldset: 'header',
    }),
  ],
})

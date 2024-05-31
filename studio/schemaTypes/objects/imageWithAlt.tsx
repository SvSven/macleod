import { defineType, defineField } from 'sanity'
import type { ValidationContext, CustomValidatorResult, Reference, StringRule } from 'sanity'

export type ImageWithAlt = {
  _type: string
  asset: Reference
  alt?: string
}

export const ImageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'alt',
      type: 'string',
      title: 'Alt text',
      description: 'Alt attribute text description for image',
      validation: (rule: StringRule) =>
        rule.custom((value: string | undefined, context: ValidationContext): CustomValidatorResult => {
          const { parent } = context as { parent: ImageWithAlt }

          // Only  make the alt tag required if an image has been selected
          if (!parent?.asset) return true

          return true
        }),
    }),
  ],
})

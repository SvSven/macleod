import { ColorSelector, defaultColors } from '../components/ColorSelector'
import { defineType, defineField, ObjectInputProps } from 'sanity'
import styled from 'styled-components'

const ColorPreview = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`

export type ColorType = {
  title: string
  value: string
  key: string
}

export const ColorList = defineType({
  name: 'colorlist',
  title: 'Color',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'value',
      type: 'string',
    }),
    defineField({
      name: 'key',
      type: 'string',
    }),
  ],
  initialValue: {
    title: defaultColors[0].title,
    value: defaultColors[0].value,
    key: defaultColors[0].key,
  },
  components: {
    input: (props: ObjectInputProps) => {
      return <ColorSelector {...props} />
    },
  },
  preview: {
    select: {
      title: 'title',
      value: 'value',
    },
    prepare({ title, value }: { value: string; title: string }) {
      return {
        title: `Color: ${title}`,
        media: <ColorPreview color={value} />,
      }
    },
  },
})

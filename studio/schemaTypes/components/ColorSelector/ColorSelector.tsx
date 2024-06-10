import { useCallback } from 'react'
import { set } from 'sanity'
import type { ObjectInputProps } from 'sanity'
import { Flex, Stack, Label } from '@sanity/ui'
import styled from 'styled-components'

export type ColorSelectorValue = {
  title: string
  value: string
  key?: string
}

export const defaultColors: ColorSelectorValue[] = [
  {
    title: 'White',
    value: 'hsl(0, 0%, 100%)',
    key: 'white-100',
  },
  {
    title: 'Black',
    value: 'hsl(0, 0%, 0%)',
    key: 'black-100',
  },
]

const Container = styled.div`
  text-align: center;
  margin: 2px;
  cursor: pointer;
`

const ColorWrapper = styled.div<{ active: boolean }>`
  display: inline-block;
  border: solid 2px ${({ active }) => (active ? 'var(--card-focus-ring-color)' : 'transparent')};
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 4px;
`

const ColorInner = styled.div<{ color: string }>`
  width: 45px;
  height: 30px;
  background-color: ${({ color }) => color};
  border: 1px solid var(--card-shadow-outline-color);
  border-radius: 4px;
`

type ColorSelectorItem = {
  color: ColorSelectorValue
  active: boolean
  onClickHandler: (val: ColorSelectorValue) => void
}

const ColorItem = ({ color, active, onClickHandler }: ColorSelectorItem) => (
  <Container onClick={() => onClickHandler(color)}>
    <ColorWrapper active={active}>
      <ColorInner color={color.value} />
    </ColorWrapper>
    <Label size={1} weight="regular">
      {color.title}
    </Label>
  </Container>
)

type ColorSelectorProps = ObjectInputProps

export const ColorSelector = ({ value, onChange, schemaType }: ColorSelectorProps) => {
  const { options } = schemaType
  const colors = (options?.colors as ColorSelectorValue[]) || defaultColors

  const handleSelect = useCallback(
    (selected: ColorSelectorValue) => {
      if (selected === value) return

      onChange(set(selected.title, ['title']))
      onChange(set(selected.value, ['value']))
      onChange(set(selected.key, ['key']))
    },
    [onChange, value],
  )

  return (
    <Stack space={3}>
      {colors && (
        <Flex direction="row" wrap="wrap" gap={1} padding={1}>
          {colors.map((colorItem: ColorSelectorValue) => {
            return (
              <ColorItem
                key={colorItem.value}
                color={colorItem}
                active={colorItem.value === value?.value}
                onClickHandler={handleSelect}
              />
            )
          })}
        </Flex>
      )}
    </Stack>
  )
}

export default ColorSelector

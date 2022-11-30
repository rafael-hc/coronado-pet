import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface FilterItemProps {
  label: string
  value: string
  id: string
}

const FilterItem = ({ id, label, value }: FilterItemProps) => {
  return (
    <>
      <Checkbox.Root id={id} value={value}>
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id}>{label}</label>
    </>
  )
}

export default FilterItem

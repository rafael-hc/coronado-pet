import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface FilterItemProps {
  label: string
  value: string
  id: string
}

const FilterItem = ({ id, label, value }: FilterItemProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Checkbox.Root
        id={id}
        value={value}
        style={{
          width: '2rem',
          height: '2rem',
          border: '1px solid $black',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Checkbox.Indicator>
          <Check />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default FilterItem

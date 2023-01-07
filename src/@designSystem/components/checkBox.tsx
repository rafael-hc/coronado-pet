import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { keyframes, styled } from '../../styles'

const CheckboxContainer = styled(CheckBoxPrimitive.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray100',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $gray100',
  '&[data-state="checked"]': {
    backgroundColor: '$primary',
  },
  '&:focus, &[data-state="checked"]': {
    border: '2px solid $primary',
  },
})
const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
})
const CheckboxIndicator = styled(CheckBoxPrimitive.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
})

export function CheckBox(props: CheckBoxPrimitive.CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

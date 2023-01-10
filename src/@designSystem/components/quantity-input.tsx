import { Minus, Plus } from 'phosphor-react'
import { styled } from '../../styles'

const Container = styled('div', {
  width: '$40',
  // padding: '$4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid $gray100',
  borderRadius: '$sm',

  button: {
    cursor: 'pointer',
    width: '$12',
    height: '$12',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
})

const Input = styled('input', {
  width: '$12',
  fontFamily: '$default',
  fontSize: '$2xl',
  color: '$gray600',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  textAlign: 'center',
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$gray200',
  },
  '@sm': {
    fontSize: '$sm',
  },
})

interface QuantityInputProps {
  quantity: number
  increment: () => void
  decrement: () => void
}
export function QuantityInput({
  decrement,
  increment,
  quantity,
}: QuantityInputProps) {
  return (
    <Container>
      <button type="button" onClick={decrement} disabled={quantity <= 1}>
        <Minus />
      </button>
      <Input type="text" value={quantity} readOnly />
      <button type="button" onClick={increment}>
        <Plus />
      </button>
    </Container>
  )
}

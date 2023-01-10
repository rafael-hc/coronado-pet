import { styled } from '../../../styles'

export const CartContainer = styled('main', {
  width: '100%',
  marginTop: '$20',
  padding: '0 $8',

  '@sm': {
    maxWidth: '75rem',
    margin: '$20 auto $20',
  },
})

export const CartHeader = styled('div', {
  height: '$16',
})

export const CartContent = styled('section', {
  width: '100%',
  maxWidth: '75rem',
  margin: '0 auto',
})

export const CartItem = styled('div', {
  padding: '$4',
  display: 'grid',
  gridTemplate: 'repeat(2, auto) / repeat(4, 1fr)',

  '& + &': {
    borderTop: '1px solid $gray100',
  },
})

export const CartItemMedia = styled('div', {
  gridRow: '1 / 3',
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CartItemDetails = styled('div', {
  gridColumn: '2 / 4',
  padding: '$4',
})

export const CartItemPrice = styled('div', {
  padding: '$4',
  display: 'flex',
  justifyContent: 'center',
})

export const CartItemQuantity = styled('div', {
  gridColumn: '2 / 4',
  padding: '$4',

  '@sm': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      cursor: 'pointer',
    },
  },
})

export const CartItemTotal = styled('div', {
  padding: '$4',
  display: 'flex',
  justifyContent: 'center',
})

export const ButtonDelete = styled('button', {
  width: '$12',
  height: '$12',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: '$sm',

  backgroundColor: '$secondary',
  color: '$white',

  '&:hover': {
    backgroundColor: '$primary',
  },
})

export const CartFooter = styled('div', {
  padding: '$8',
})

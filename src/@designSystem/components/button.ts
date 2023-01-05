import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  svg: {
    width: '$4',
    height: '$4',
  },
  '&:disabled, &[aria-disabled=true]': {
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary',
        '&:not(:disabled):hover': {
          background: '$secondary',
        },
        '&:disabled, &[aria-disabled=true]': {
          backgroundColor: '$gray200',
        },
      },
      secondary: {
        color: '$secondary',
        backgroundColor: 'transparent',
        border: '2px solid $primary',
        '&:not(:disabled):hover': {
          background: '$primary',
          color: '$white',
        },
        '&:disabled, &[aria-disabled=true]': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
      tertiary: {
        color: '$gray100',
        '&:not(:disabled):hover': {
          color: '$white',
        },
        '&:disabled, &[aria-disabled=true]': {
          color: '$gray600',
        },
      },
    },
    size: {
      sm: {
        height: '2.5rem',
      },
      md: {
        height: '3rem',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

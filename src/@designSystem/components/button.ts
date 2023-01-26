import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$xl',
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
  transition: 'all 600ms',
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
    'w-full': {
      true: {
        width: '100%',
      },
    },
    size: {
      sm: {
        height: '$10',
      },
      md: {
        height: '$16',
        '@sm': {
          height: '$12',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
  '@sm': {
    fontSize: '$md',
  },
})

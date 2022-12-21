import * as PopoverPrimitive from '@radix-ui/react-popover'
import { keyframes, styled } from '../../styles'

export const TopBarContainer = styled('nav', {
  width: '100%',
  padding: '0.75rem',
  color: '$gray-400',

  display: 'flex',
  justifyContent: 'space-between',
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})
export const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
  '&:focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $primary`,
  },
})

export const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
})

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$gray-500',
  position: 'absolute',
  top: 5,
  right: 5,
  cursor: 'pointer',
  '&:hover': { color: '$primary' },
  '&:focus': { boxShadow: `0 0 0 2px $secondary` },
})

// Exports
export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverContent = StyledContent
export const PopoverClose = StyledClose

// Your app...
export const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  a: {
    display: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
  },
})

export const ButtonAccount = styled('button', {
  all: 'unset',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  color: '$gray-500',
  backgroundColor: '$white',
  boxShadow: `0 2px 10px $black`,
  cursor: 'pointer',
})
export const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
})

export const Label = styled('label', {
  fontSize: 13,
  color: '$primary',
  width: 75,
})

export const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 13,
  lineHeight: 1,
  color: '$primary',
  boxShadow: `0 0 0 1px $primary`,
  height: 25,

  '&:focus': { boxShadow: `0 0 0 2px $primary` },
})

export const Text = styled('div', {
  margin: 0,
  color: '$secondary',
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: '$secondary' },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
})

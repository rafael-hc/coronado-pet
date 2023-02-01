import { keyframes, styled } from '../../styles'
import * as HoverCard from '@radix-ui/react-hover-card'
import Link from 'next/link'

export const HeaderContainer = styled('section', {
  width: '100vw',
  padding: '1rem 0',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',

  color: '$gray-400',
  '@sm': {
    width: 1200,
  },
})

export const Logo = styled('div', {
  width: '7.5rem',
  height: '4.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',
})

export const Icons = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  gap: 16,

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    gap: 8,

    height: 40,

    borderRadius: 6,
  },
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

export const HoverCardContent = styled(HoverCard.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
})

export const HoverCardArrow = styled(HoverCard.Arrow, {
  fill: 'white',
})

export const ImageTrigger = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
})

export const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
})

export const Text = styled('div', {
  margin: 0,
  color: '$gray400',
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: '$gray200' },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
})

export const Flex = styled('div', { display: 'flex' })

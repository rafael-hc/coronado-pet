import * as Popover from '@radix-ui/react-popover'
import * as Accordion from '@radix-ui/react-accordion'
import { keyframes, styled } from '../../../styles'

export const FilterMobileContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
})

export const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const PopoverClose = styled(Popover.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$primary',
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: '$secondary' },
  '&:focus': { boxShadow: `0 0 0 2px $primary` },
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

export const PopoverContent = styled(Popover.Content, {
  borderRadius: 4,
  padding: 20,
  width: '100vw',
  backgroundColor: '$white',
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
  '&:focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px $primary}`,
  },
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: '$white',
})

export const AccordionRoot = styled(Accordion.Root, {
  borderRadius: 6,
  width: '100',
  backgroundColor: '$white',
  boxShadow: `0 2px 10px $black`,
})

export const AccordionItem = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: `0 0 0 2px $gray-600`,
  },
})

export const StyledHeader = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
  marginTop: '1rem',
})

export const StyledTrigger = styled(Accordion.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$gray-600',
  boxShadow: `0 1px 0 $gray-500`,
  backgroundColor: '$white',

  '&[data-state=open]': {
    svg: {
      transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      transform: 'rotate(180deg)',
    },
  },
})

export const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
})

export const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
})

export const StyledContent = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  color: '$gray-500',
  backgroundColor: '$gray-50',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
})

export const StyledContentText = styled('div', {
  padding: '15px 20px',
})

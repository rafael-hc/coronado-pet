import { keyframes, styled } from '../../styles'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

export const ProductContainer = styled('main', {
  width: '100%',
  maxWidth: 1200,
  margin: '3rem auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const InfoProduct = styled('section', {
  '@sm': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyContent: 'center',
    gap: '1rem',
  },
})

export const DescriptionProduct = styled('section', {
  width: '100%',
  marginTop: '3rem',
  padding: '0 1rem',

  h2: {
    marginBottom: '1rem',
  },

  p: {
    marginBottom: '0.5rem',
    paddingLeft: '0.5rem',
  },
})

export const DetailsProduct = styled('section', {
  display: 'flex',
  flexDirection: 'column',
})

export const Title = styled('h1', {
  color: '$gray-600',
  fontWeight: 'normal',
  fontSize: '$3',
})

export const InfoContent = styled('div', {
  width: '80%',
})

export const Information = styled('div', {
  display: 'flex',
  gap: '0.25rem',

  marginTop: '1rem',
  paddingBottom: '2rem',

  borderBottom: '1px solid $gray-100',

  color: '$gray-400',
})

export const Stock = styled('span', {
  color: '$primary',
  variants: {
    isLow: {
      true: {
        color: '$danger',
      },
    },
  },
})

export const Price = styled('span', {
  display: 'block',
  marginTop: '1rem',

  fontSize: 'xx-large',
  fontWeight: 'bold',
})

export const InputQnt = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  height: '2.375rem',
  width: '4.5rem',
  borderRadius: 8,

  border: '1px solid $gray-100',
})

export const Buy = styled('div', {
  marginTop: '3rem',

  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const Amount = styled('input', {
  maxWidth: '1.375rem',
  border: 'none',
  textAlign: 'center',

  backgroundColor: '$white',
})

export const ButtonChangeAmount = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 2,
  color: '$primary',
  cursor: 'pointer',

  '&:hover': {
    color: '$secondary',
  },
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '0.5' },
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const AlertDialogOverlay = styled(AlertDialog.Overlay, {
  backgroundColor: '$gray700',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 1500ms`,
  animationFillMode: 'forwards',
})

export const AlertDialogContent = styled(AlertDialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': { outline: 'none' },
})

export const AlertDialogTitle = styled(AlertDialog.Title, {
  margin: 0,
  color: '$gray600',
  fontSize: '$4xl',
  fontWeight: 500,
})

export const AlertDialogDescription = styled(AlertDialog.Description, {
  marginBottom: 20,
  color: '$gray500',
  fontSize: 15,
  lineHeight: 1.5,
})

export const Flex = styled('div', { display: 'flex' })

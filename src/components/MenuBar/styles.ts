import Link from 'next/link'
import { styled } from '../../styles'

export const MenuBarContainer = styled('nav', {
  width: '100%',
  // height: 50,
  overflowX: 'auto',
  overflow: '-moz-scrollbars-none',
  padding: '1rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  // backgroundColor: '$white',

  '&::-webkit-scrollbar': {
    width: '0! important',
  },
})

export const LinkItem = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',

  p: {
    textAlign: 'center',
    fontSize: '1.2rem',
  },
})

export const ImageItemContainer = styled('div', {
  width: '6rem',
  height: '6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'relative',

  backgroundColor: '$gray-100',
  color: '$secondary',

  borderRadius: '100%',

  img: {
    objectFit: 'contain',
  },
})

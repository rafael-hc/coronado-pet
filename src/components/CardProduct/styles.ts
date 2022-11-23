import Link from 'next/link'
import { styled } from '../../styles'

export const CardContainer = styled(Link, {
  width: '100%',
  maxWidth: '14rem',
  padding: '0.75rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderRadius: 8,
  border: '$gray-200 solid 1px',

  p: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$primary',

    marginBottom: '1rem',
  },
})

export const CardImage = styled('div', {
  width: '100%',
  height: '13rem',
  objectFit: 'cover',
  position: 'relative',

  img: {
    objectFit: 'contain',
  },
})

export const Tilte = styled('h3', {
  fontSize: '1rem',
  fontWeight: 'normal',

  marginBottom: '0.5rem',
})

export const Rating = styled('div', {
  display: 'flex',
  marginBottom: '0.5rem',
})

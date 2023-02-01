import Link from 'next/link'
import { Text } from '../../@designSystem/components/text'
import { styled } from '../../styles'

export const CardContainer = styled(Link, {
  width: '100%',
  padding: '0.75rem',

  maxWidth: '14rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  borderRadius: 8,
  border: '$gray200 solid 1px',

  variants: {
    landscape: {
      true: {
        maxWidth: '100vw',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        columnGap: '1.5rem',
      },
    },
  },
})

export const CardImage = styled('div', {
  width: '100%',
  height: '12rem',
  objectFit: 'cover',
  position: 'relative',

  img: {
    objectFit: 'contain',
  },
})

export const CardInfo = styled('div', {})

export const Price = styled(Text, {
  marginBottom: '0.5rem',
  color: '$gray600',

  fontSize: '1.5rem',
  fontWeight: 'bold',
})

export const Title = styled(Text, {
  height: '4.8rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  direction: 'ltr',
  lineHeight: '$short',
})

export const Rating = styled('div', {
  display: 'flex',
  marginBottom: '0.5rem',
})

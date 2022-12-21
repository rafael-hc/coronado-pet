import { styled } from '../../../styles'

export const HeaderMobileContainer = styled('nav', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',
  padding: '0 1rem',
})

export const ColumnHeader = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '1rem',

  variants: {
    side: {
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
})

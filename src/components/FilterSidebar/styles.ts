import { styled } from '../../styles'

export const SidebarFilterContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
})

export const SidebarFilterContainerMobile = styled('div', {
  width: '100%',
  padding: '1rem',

  display: 'flex',
  justifyContent: 'space-between',
})

export const FilterButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const SidebarFilterHeader = styled('section', {
  padding: '0.5rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    padding: '0.75rem',
    backgroundColor: '$primary',
    borderRadius: 6,
    cursor: 'pointer',
    transition: 'all 0.5s',

    '&:hover': {
      backgroundColor: '$secondary',
    },

    '&:first-child': {
      backgroundColor: 'transparent',
      fontWeight: 'bold',
      color: '$secondary',
    },
  },
})

export const FilterCategory = styled('ul', {
  marginBottom: '1rem',

  li: {
    '&:first-child': {
      fontSize: '1.25rem',
      fontWeight: 'bold',
      marginBottom: '0.25rem',
    },
  },
})

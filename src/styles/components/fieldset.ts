import { styled } from '..'

export const Fieldset = styled('fieldset', {
  border: 'none',
  display: 'flex',
  gap: '1rem',

  label: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  variants: {
    inLine: {
      true: {
        flexDirection: 'row',
      },
    },
  },
})

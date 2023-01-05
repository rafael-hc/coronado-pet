import { styled } from '..'

export const Fieldset = styled('fieldset', {
  border: 'none',
  display: 'flex',
  // flexDirection: 'column',
  gap: '0.25rem',

  variants: {
    inLine: {
      true: {
        flexDirection: 'row',
      },
    },
  },
})

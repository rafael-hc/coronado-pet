import { styled } from '../../styles'

export const RegisterContainer = styled('main', {
  maxWidth: '70rem',
  height: 'auto',
  margin: '2rem auto',
  backgroundColor: '$white',

  padding: '2rem',
})

export const FormRegister = styled('form', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: '2rem',

  input: {
    border: 'none',
    borderRadius: 6,
    padding: '0.75rem',
  },
})

export const TipoPessoa = styled('div', {
  gridColumnStart: 1,
  gridRowStart: 2,
  padding: '1rem',
  height: '3rem',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
})

export const StepFormContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-50',

  variants: {
    hiddenStep: {
      true: {
        display: 'none',
      },
    },
  },
  // ${(props) =>
  //   props.step !== 0 &&
  //   css`
  //
  //   `}
})

export const AddressForm = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-400',
  // ${(props) =>
  //   props.step !== 1 &&
  //   css`
  //     display: none,
  //   `}
})

export const LoginForm = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-400',
  // ${(props) =>
  //   props.step !== 2 &&
  //   css`
  //     display: none,
  //   `}
})

export const ButtonForm = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',

  button: {
    height: '2.5rem',
    width: '100%',
    borderRadius: 8,

    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',

    backgroundColor: '$primary',
    color: '$white',
  },
})

export const LabelStepForm = styled('div', {
  display: 'flex',
  alignItems: 'center',
  fontSize: '1.5rem',
  lineHeight: 0,
  span: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
})

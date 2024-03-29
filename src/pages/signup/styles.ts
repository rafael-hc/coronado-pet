import { Box } from '../../@designSystem/components/box'
import { Text } from '../../@designSystem/components/text'
import { styled } from '../../styles'

export const RegisterContainer = styled('main', {
  maxWidth: '70rem',
  height: 'auto',
  margin: '2rem auto',
  backgroundColor: '$white',

  padding: '2rem',
})

export const PersonalDataForm = styled(Box, {
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: '2rem',
})

export const StepFormContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-50',

  variants: {
    hiddenStep: {
      true: {
        display: 'none',
      },
    },
  },
})

export const AddressForm = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-400',
})

export const LoginForm = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem',

  borderRadius: 8,

  backgroundColor: '$gray-400',
})

export const ButtonForm = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
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

export const FormError = styled(Text, {
  color: '$danger',
})

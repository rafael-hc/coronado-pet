import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from 'react'
import { styled } from '../../styles'

const TextInputContainer = styled('div', {
  backgroundColor: '$gray100',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid transparent',
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'text',
  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$4 $4',
        '@sm': {
          padding: '$3 $4',
        },
      },
    },
  },
  '&:has(input:focus)': {
    borderColor: '$primary',
  },
  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  defaultVariants: {
    size: 'md',
  },
})

export const TextInputInput = styled('input', {
  fontFamily: '$default',
  fontSize: '$2xl',
  color: '$gray600',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',
  '&:focus': {
    outline: 0,
  },
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&::placeholder': {
    color: '$gray200',
  },
  '@sm': {
    fontSize: '$sm',
  },
})

const Icon = styled(Slot, {
  width: '$6',
  height: '$6',
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray400',
  fontWeight: 'regular',
})

export interface TextInputRootProps
  extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

const TextInputRoot = ({ children }: TextInputRootProps) => {
  return <TextInputContainer>{children}</TextInputContainer>
}

export interface TextInputIconProps {
  children: ReactNode
}

const TextInputIcon = ({ children }: TextInputIconProps) => {
  return <Icon>{children}</Icon>
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
}

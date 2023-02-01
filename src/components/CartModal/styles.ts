import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../styles'

export const CartModalContent = styled(Popover.Content, {
  height: '100vh',
  backgroundColor: '$gray100',
})

export const CartModalClose = styled(Popover.Close, {})

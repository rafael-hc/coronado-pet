import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../styles'

export const CartModalContent = styled(Popover.Content, {
  width: '70vw',
  height: '100vh',
  backgroundColor: '$gray-100',
})

export const CartModalClose = styled(Popover.Close, {})

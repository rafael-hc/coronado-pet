import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../../styles'

export const HamburgerMenuContainer = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
})

export const Content = styled(Popover.Content, {
  width: '70vw',
  height: '100vh',
  backgroundColor: '$gray-100',
})

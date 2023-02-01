import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../../styles'

export const HeaderMobileContainer = styled('nav', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyItems: 'center',
  padding: '0 1rem',
  color: '$gray600',
})

export const ColumnHeader = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
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

export const PopoverContent = styled(Popover.Content, {
  width: '40vw',
  display: 'flex',
  padding: '$4',
  margin: '0 1rem',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.75rem',

  borderRadius: '$sm',

  backgroundColor: '$white',
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: '$white',
})

export const PopoverTrigger = styled(Popover.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
})

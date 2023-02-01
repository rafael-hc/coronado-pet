import * as Popover from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { Content } from './styles'

export function MenuBarMobile() {
  return (
    <Popover.Portal>
      <Content sideOffset={-66}>
        <Popover.Close>
          <X size={32} />
        </Popover.Close>
        Menu
      </Content>
    </Popover.Portal>
  )
}

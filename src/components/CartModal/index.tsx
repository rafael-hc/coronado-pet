import * as Popover from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { Button } from '../../@designSystem/components/button'
import { CartComponent } from '../../pages/cart/component'
import { CartModalClose, CartModalContent } from './styles'

export function CartModal() {
  return (
    <Popover.Portal>
      <CartModalContent sideOffset={-65}>
        <CartModalClose asChild>
          <Button type="button" size="sm">
            <X size={32} />
          </Button>
        </CartModalClose>
        <CartComponent />
      </CartModalContent>
    </Popover.Portal>
  )
}

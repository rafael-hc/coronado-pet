import * as Popover from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { CartModalClose, CartModalContent } from './styles'

export function CartModal() {
  return (
    <Popover.Portal>
      <CartModalContent sideOffset={-65}>
        <button>
          <CartModalClose asChild>
            <X size={32} />
          </CartModalClose>
        </button>
        Carrinho
      </CartModalContent>
    </Popover.Portal>
  )
}

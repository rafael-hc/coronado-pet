import * as Popover from '@radix-ui/react-popover'
import { Hamburger } from 'phosphor-react'
import { HeaderMobileContainer } from './styles'

const HeaderMobile = () => {
  return (
    <HeaderMobileContainer>
      <h1>Oi</h1>

      <Popover.Root>
        <Popover.Trigger asChild>
          <Hamburger />
        </Popover.Trigger>
      </Popover.Root>
    </HeaderMobileContainer>
  )
}

export default HeaderMobile

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { singOut } from '../../store/reducers/loginSlice'
import Link from 'next/link'
import { CaretDown, SignIn, SignOut, X } from 'phosphor-react'
import {
  ButtonAccount,
  Flex,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  StyledArrow,
  TopBarContainer,
} from './styles'

const TopBar = () => {
  const dispatch = useDispatch()
  const { users } = useSelector((state: RootState) => state)

  const handleLogout = () => {
    dispatch(singOut())
  }
  return (
    <TopBarContainer>
      <Link href="/product/mots-vendor" prefetch={false}>
        Mais vendidos!
      </Link>
      <PopoverPrimitive.Root>
        <PopoverTrigger asChild>
          <ButtonAccount>
            My account <CaretDown />
          </ButtonAccount>
        </PopoverTrigger>
        <PopoverPrimitive.Portal>
          <PopoverContent sideOffset={5}>
            <Flex css={{ flexDirection: 'column', gap: 10 }}>
              {users.success ? (
                <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
                  {`Logado como: ${users.userInfo?.email}`}
                  <SignOut size={24} />
                </button>
              ) : (
                <Link href="/signin">
                  <SignIn size={24} />
                  Entre ou Cadastre-se
                </Link>
              )}
            </Flex>
            <PopoverClose aria-label="Close">
              <X />
            </PopoverClose>
            <StyledArrow />
          </PopoverContent>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </TopBarContainer>
  )
}

export default TopBar

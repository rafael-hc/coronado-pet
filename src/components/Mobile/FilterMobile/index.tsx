import * as Popover from '@radix-ui/react-popover'
import Link from 'next/link'
import { CaretDown, Funnel, Trash, X } from 'phosphor-react'
import { Button } from '../../../styles/components/button'
import { FilterItem } from '../../FilterItem'
import {
  AccordionItem,
  AccordionRoot,
  FilterButton,
  FilterMobileContainer,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  StyledContent,
  StyledContentText,
  StyledHeader,
  StyledTrigger,
} from './styles'

export function FilterMobile() {
  return (
    <FilterMobileContainer>
      <FilterButton type="button">
        <span>Limpar filtro</span>
        <Trash size={24} />
      </FilterButton>
      <Popover.Root>
        <Popover.Trigger asChild>
          <FilterButton>
            <span>Filtrar</span>
            <Funnel size={24} />
          </FilterButton>
        </Popover.Trigger>
        <Popover.Portal>
          <PopoverContent>
            <div>
              <AccordionRoot type="multiple">
                <AccordionItem value="1">
                  <StyledHeader>
                    <StyledTrigger>
                      Tamanho
                      <CaretDown aria-hidden />
                    </StyledTrigger>
                  </StyledHeader>
                  <StyledContent>
                    <StyledContentText>
                      <li>Tamanho</li>
                      <li>
                        <Link href="/product/f/15kg">15kg</Link>
                      </li>
                      <li>
                        <Link href="/product/f/100g">100g</Link>
                      </li>
                      <FilterItem id="1" label="22kg" value="22kg" />
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                    </StyledContentText>
                  </StyledContent>
                </AccordionItem>
                <AccordionItem value="2">
                  <StyledHeader>
                    <StyledTrigger>
                      Categoria
                      <CaretDown aria-hidden />
                    </StyledTrigger>
                  </StyledHeader>
                  <StyledContent>
                    <StyledContentText>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                      <li>item</li>
                    </StyledContentText>
                  </StyledContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
            <PopoverClose aria-label="Close">
              <X size="2rem" />
            </PopoverClose>
            <PopoverArrow />
            <footer
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <Button size={3} style={{ flex: 1 }}>
                Limpar
              </Button>
              <Button size={3} style={{ flex: 1 }}>
                Aplicar
              </Button>
            </footer>
          </PopoverContent>
        </Popover.Portal>
      </Popover.Root>
    </FilterMobileContainer>
  )
}

import Link from 'next/link'
import FilterItem from '../FilterItem'
import {
  FilterCategory,
  SidebarFilterContainer,
  SidebarFilterHeader,
} from './styles'

const FilterSidebar = () => {
  return (
    <SidebarFilterContainer>
      <SidebarFilterHeader>
        <button>Limpar</button>
        <button>Aplicar</button>
      </SidebarFilterHeader>
      <FilterCategory>
        <li>Tamanho</li>
        <li>
          <Link href="/product/filter/15kg">15kg</Link>
        </li>
        <li>
          <Link href="/product/filter/100g">100g</Link>
        </li>
        <FilterItem id="1" label="22kg" value="22kg" />
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </FilterCategory>
      <FilterCategory>
        <li>Category 2</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
        <li>item</li>
      </FilterCategory>
    </SidebarFilterContainer>
  )
}

export default FilterSidebar

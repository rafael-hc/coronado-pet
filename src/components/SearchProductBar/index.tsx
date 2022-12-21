import { MagnifyingGlass } from 'phosphor-react'
import { SearchBar } from './styles'

const SearchProductBar = () => {
  return (
    <SearchBar>
      <button>
        <MagnifyingGlass size={24} />
      </button>
      <input type="text" placeholder="pesquisar..." />
    </SearchBar>
  )
}

export default SearchProductBar

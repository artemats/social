import SearchForm from 'src/components/forms/search-form'

const GlobalSearch = () => {
  const handleSubmit = (value: string) => {
    console.log('GlobalSearch, value ', value)
  }

  return <SearchForm onSubmit={handleSubmit} />
}

export default GlobalSearch

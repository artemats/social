import { IconButton, InputBase, Box } from '@mui/material'
import { Search } from '@mui/icons-material'

type SearchFormProps = {
  onSubmit: (key: string) => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  return (
    <form>
      <Box
        sx={{
          padding: '0 1rem',
          borderRadius: 1,
          backgroundColor: 'background.paper',
        }}
      >
        <InputBase placeholder="Search..." />
        <IconButton aria-label="start global search">
          <Search />
        </IconButton>
      </Box>
    </form>
  )
}

export default SearchForm

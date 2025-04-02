import { IconButton, InputBase, Box, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'

type SearchFormProps = {
  onSubmit: (key: string) => void
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const theme = useTheme()

  return (
    <form>
      <Box
        sx={{
          backgroundColor: theme.palette.secondary.light,
          padding: '0 1rem',
          borderRadius: 1,
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

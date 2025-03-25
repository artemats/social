import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material'
import UserNav from 'src/components/UserNav'

const Header = () => {
  const theme = useTheme()

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h3">LinkUp</Typography>
          <UserNav />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

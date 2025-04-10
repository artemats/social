import { AppBar, Container, Toolbar, Typography, useTheme } from '@mui/material'
import UserNav from 'src/components/layout/UserNav'

const Header = () => {
  const theme = useTheme()

  return (
    <AppBar
      position="relative"
      sx={{ backgroundColor: 'background.default' }}
      data-testid="header"
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            [theme.breakpoints.up('sm')]: { paddingLeft: 0, paddingRight: 0 },
          }}
        >
          <Typography variant="h3" color="text.primary">
            LinkUp
          </Typography>
          <UserNav />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

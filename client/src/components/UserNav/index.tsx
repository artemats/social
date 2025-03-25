import { Badge, Box, IconButton, useTheme } from '@mui/material'
import {
  AccountCircle,
  Notifications,
  DarkMode,
  LightMode,
} from '@mui/icons-material'
import { useAppDispatch } from 'src/store/hooks/useStore.ts'
import { switchTheme } from 'src/store/slices/settingsSlice.ts'

const UserNav = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()

  const handleSwitchTheme = () => {
    dispatch(switchTheme())
  }

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton
        size="large"
        aria-label="switch colot theme"
        color="inherit"
        onClick={handleSwitchTheme}
      >
        {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
      </IconButton>
      <IconButton
        size="large"
        aria-label={`show ${10} new notifications`}
        color="inherit"
      >
        <Badge badgeContent="10">
          <Notifications />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Box>
  )
}

export default UserNav

import { useState, MouseEvent } from 'react'
import { Badge, Box, IconButton, Menu, MenuItem, useTheme } from '@mui/material'
import {
  AccountCircle,
  Notifications,
  DarkMode,
  LightMode,
} from '@mui/icons-material'
import { useAppDispatch } from 'src/store/hooks/useStore.ts'
import { switchTheme } from 'src/store/slices/settingsSlice.ts'
import GlobalSearch from 'src/components/shared/GlobalSearch'

const UserNav = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleSwitchTheme = () => {
    dispatch(switchTheme())
  }

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 6,
      }}
    >
      <GlobalSearch />
      <Box>
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
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleOpenMenu}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Log out</MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default UserNav

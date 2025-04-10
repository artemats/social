import { Outlet } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'

const GuestLayout = () => {
  return (
    <Grid container>
      <Box sx={{ width: '50%', height: '100dvh' }}>
        <img
          src="https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="LinkUp Authentification"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100dvh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ margin: 'auto 0', padding: '0 3rem' }}>
          <Typography variant="h1" gutterBottom mb={1}>
            LinkUp
          </Typography>
          <Outlet />
        </Box>
      </Box>
    </Grid>
  )
}

export default GuestLayout

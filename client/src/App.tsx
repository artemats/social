import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import ProfilePage from 'src/pages/profile'
import { useAppSelector } from 'src/store/hooks/useStore'
import { selectSettings } from 'src/store/slices/settingsSlice'
import { themeSettings } from 'src/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ProtectedRoute from 'src/routes/ProtectedRoute'
import GuestLayout from 'src/components/layouts/GuestLayout'
import UserLayout from 'src/components/layouts/UserLayout'

function App() {
  const {
    data: { theme: mode },
  } = useAppSelector(selectSettings)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const user = true
  console.log('App')
  // TODO: add layout for authenticated and unauthenticated users
  return (
    <main id="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<GuestLayout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<LoginPage />} />
            </Route>
            <Route element={<UserLayout />}>
              <Route
                path="/"
                element={
                  <ProtectedRoute isLocked={!user} redirectPath="/login">
                    <HomePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile/:userId"
                element={
                  <ProtectedRoute isLocked={!user} redirectPath="/login">
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </main>
  )
}

export default App

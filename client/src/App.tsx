import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createTheme } from '@mui/material/styles'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import ProfilePage from 'src/pages/profile'
import { useAppSelector } from 'src/store/hooks/useStore.ts'
import { selectSettings } from 'src/store/slices/settingsSlice.ts'
import { themeSettings } from 'src/theme.ts'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ProtectedRoute from 'src/routes/ProtectedRoute.tsx'

function App() {
  const {
    data: { theme: mode },
  } = useAppSelector(selectSettings)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const user = false
  console.log('App')
  return (
    <main id="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute isLocked={user} redirectPath="/login">
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<LoginPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </main>
  )
}

export default App

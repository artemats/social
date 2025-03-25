import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import ProfilePage from 'src/pages/profile'
import { useAppSelector } from 'src/store/hooks/useStore.ts'
import { selectSettings } from 'src/store/slices/settingsSlice.ts'

function App() {
  const {
    data: { theme },
  } = useAppSelector(selectSettings)
  console.log('App, theme ', theme)
  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

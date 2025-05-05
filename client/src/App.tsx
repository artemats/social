import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from 'src/pages/home'
import LoginPage from 'src/pages/login'
import ProfilePage from 'src/pages/profile'
import ProtectedRoute from 'src/routes/ProtectedRoute'
import GuestLayout from 'src/components/layout/GuestLayout'
import UserLayout from 'src/components/layout/UserLayout'
import RegistrationPage from 'src/pages/registration'
import { useUserStore } from 'src/store/useUserStore'

function App() {
  const isAuthorized = useUserStore((state) => state.token)
  console.log('App')

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
          </Route>
          <Route element={<UserLayout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute isLocked={!isAuthorized} redirectPath="/signin">
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLocked={!isAuthorized} redirectPath="/signin">
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App

import { IUser } from 'src/types'
import { create } from 'zustand/react'
import { persist, createJSONStorage } from 'zustand/middleware'

type State = {
  user: IUser | null
  token: string | null
}

type Action = {
  setUser: (user: State['user']) => void
  setToken: (token: State['token']) => void
  setLogout: () => void
}

export const useUserStore = create<State & Action>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      setUser: (user) =>
        set(() => {
          console.log('setUser, user', user)
          return { user }
        }),
      setToken: (token) =>
        set(() => {
          console.log('setToken, token', token)
          return { token }
        }),
      setLogout: async () => {
        set(() => {
          console.log('setLogout')
          return { user: null, token: null }
        })
        localStorage.removeItem('user-storage')
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

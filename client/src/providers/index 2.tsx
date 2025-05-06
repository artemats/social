import { PropsWithChildren } from 'react'
import StoreProvider from 'src/providers/StoreProvider'

const CustomProvider = ({ children }: PropsWithChildren) => {
  return <StoreProvider>{children}</StoreProvider>
}

export default CustomProvider

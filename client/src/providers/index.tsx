import { PropsWithChildren } from 'react'
import ReactQueryProvider from 'src/providers/ReactQueryProvider'

const Providers = ({ children }: PropsWithChildren) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}

export default Providers

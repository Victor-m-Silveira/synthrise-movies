import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
//Aqui se organiza por ordem de prioridade, meu amigo amazonico.//
<RecoilRoot>
  <AuthProvider>
     <Component {...pageProps} />
   </AuthProvider>
</RecoilRoot>
     
  )
}

export default MyApp

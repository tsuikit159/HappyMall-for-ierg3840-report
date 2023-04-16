import '@/styles/globals.css'
import { RecoilRoot } from "recoil"
import { Toaster } from 'react-hot-toast'
export default function App({ Component, pageProps }) {
  
  return (
    <RecoilRoot>
    <Toaster position='bottom-center' />
      <Component {...pageProps} />
      </RecoilRoot>

  )
  
}


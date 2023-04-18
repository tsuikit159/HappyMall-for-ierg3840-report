import '@/styles/globals.css'
import { RecoilRoot } from "recoil"
import { Toaster } from 'react-hot-toast'
import {SessionProvider} from 'next-auth/react'
import ContextProvider from "../context";

export default function App(
  { Component, pageProps :{
    session, ...pageProps
  } }) {
  
  return (
  <SessionProvider session={session}>
    <RecoilRoot>
    <ContextProvider>
    <Toaster position='bottom-center' />
      <Component {...pageProps} />
      </ContextProvider>
      </RecoilRoot>
      </SessionProvider>

  )
  
}


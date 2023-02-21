
import '../styles/globals.css'
import React from 'react'
import { Provider } from 'store/context'
import { Layout } from 'practiceapp/components'
import { Toaster } from 'react-hot-toast'
import { Footer } from '../../practiceapp/components'
export default function App({ Component, pageProps }) {
  return (
    <Provider>
     <Layout/>
<Toaster/>
  <Component {...pageProps} />
   <Footer/>
  </Provider>
 
  )
}
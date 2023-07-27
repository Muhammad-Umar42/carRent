'use client;'
import Footer from '@/component/footer'
import Nav from '@/component/nav'
import '@/styles/globals.css'
import { useEffect } from 'react'


export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])

  return<>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>

  </>
  
}

import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import CustomToastContainer from 'utils/CustomToastContainer'
import 'react-toastify/dist/ReactToastify.css'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useEffect, useState } from 'react'

function App({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) {
    return null
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Test</title>
          <meta name="theme-color" content="#06092B" />
          <meta
            name="description"
            content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
          />
        </Head>
        <GlobalStyles />
        <CustomToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Raleway, Inter } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'], display: 'swap', variable: '--font-raleway' })
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${raleway.style.fontFamily};
        }
      `}</style>
      <main className={`${raleway.variable} ${inter.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

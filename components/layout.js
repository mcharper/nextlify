import Head from "next/head"

import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}
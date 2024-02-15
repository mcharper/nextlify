import Header from './header'
import Footer from './footer'
import { ConsentBanner } from './consentBanner';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ConsentBanner />
    </>
  )
}
import '../styles.css'
import Layout from '../components/layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({Component, pageProps}) {
    return (
    <Layout>
        <Component {...pageProps} />
    </Layout>)
}
import Head from "next/head"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import Layout from '../components/layout'
import '../styles.css'

config.autoAddCss = false

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Mike Harper - IT Contract Developer</title>
                <meta name="description" content="A versatile full-stack developer with over 20 years' industry experience, currently working with React and TypeScript."></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
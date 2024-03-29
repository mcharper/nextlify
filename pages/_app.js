import Head from "next/head"
import { useState } from "react"

import { LanguageContext } from '../LanguageContext'
import Layout from '../components/layout'
import { ConsentProvider } from '../contexts/consentProvider';

import { attributes as generalMetadataEnGB } from '../content/en-GB/general.md'
import { attributes as generalMetadataDeDE } from '../content/de-DE/general.md'
import { attributes as headerMetadataEnGB, react as headerContentEnGB } from '../content/en-GB/header.md'
import { attributes as headerMetadataDeDE, react as headerContentDeDE } from '../content/de-DE/header.md'
import { attributes as homeMetadataEnGB, react as homeContentEnGB } from '../content/en-GB/home.md'
import { attributes as homeMetadataDeDE, react as homeContentDeDE } from '../content/de-DE/home.md'
import { attributes as statusCardMetadataEnGB, react as statusCardContentEnGB } from '../content/en-GB/statusCard.md'
import { attributes as statusCardMetadataDeDE, react as statusCardContentDeDE } from '../content/de-DE/statusCard.md'
import { attributes as projectMetadataEnGB, react as projectContentEnGB } from '../content/en-GB/projects.md';
import { attributes as projectMetadataDeDE, react as projectContentDeDE } from '../content/de-DE/projects.md';
import { attributes as skillsetMetadataEnGB, react as skillsetContentEnGB } from '../content/en-GB/skillset.md';
import { attributes as skillsetMetadataDeDE, react as skillsetContentDeDE } from '../content/de-DE/skillset.md';
import { attributes as testimonialsMetadataEnGB, react as testimonialsContentEnGB } from '../content/en-GB/testimonials.md';
import { attributes as testimonialsMetadataDeDE, react as testimonialsContentDeDE } from '../content/de-DE/testimonials.md';

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../styles.css'
import 'react-hook-consent/dist/styles/style.css';

config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
    const [language, setLanguage] = useState("en-GB");

    const toggleLanguage = () => setLanguage(language === 'en-GB' ? 'de-DE' : 'en-GB');

    const contentModel = {
        language: language,
        general: {
            metadata: language === "en-GB" ? generalMetadataEnGB : generalMetadataDeDE,
        },
        header: {
            metadata: language === "en-GB" ? headerMetadataEnGB : headerMetadataDeDE
        },
        home: {
            metadata: language === "en-GB" ? homeMetadataEnGB : homeMetadataDeDE,
            content: language === "en-GB" ? homeContentEnGB : homeContentDeDE
        },
        statusCard: {
            metadata: language === "en-GB" ? statusCardMetadataEnGB : statusCardMetadataDeDE,
            content: language === "en-GB" ? statusCardContentEnGB : statusCardContentDeDE
        },
        projects: {
            metadata: language === "en-GB" ? projectMetadataEnGB : projectMetadataDeDE,
            content: language === "en-GB" ? projectContentEnGB : projectContentDeDE
        },
        skillset: {
            metadata: language === "en-GB" ? skillsetMetadataEnGB : skillsetMetadataDeDE,
            content: language === "en-GB" ? skillsetContentEnGB : skillsetContentDeDE
        },
        testimonials: {
            metadata: language === "en-GB" ? testimonialsMetadataEnGB : testimonialsMetadataDeDE,
            content: language === "en-GB" ? testimonialsContentEnGB : testimonialsContentDeDE
        },
        toggleLanguage: toggleLanguage
    };

    return (
        <>
            <Head>
                <title>Mike Harper - IT Contract Developer</title>
                <meta name="description" content="A versatile full-stack developer with over 20 years' industry experience, currently working with React and TypeScript."></meta>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />

                <script dangerouslySetInnerHTML={{
                    __html: `
                    if(localStorage.getItem("react-hook-consent")?.indexOf("analyticalCookies") > -1) {
                        var gtagScript = document.createElement('script');
                        gtagScript.async = true;
                        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}';
                        var firstScript = document.getElementsByTagName('script')[0];
                        firstScript.parentNode.insertBefore(gtagScript,firstScript);

                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    };
                    `,
                }} />
            </Head>
            <LanguageContext.Provider value={contentModel}>
                <ConsentProvider>
                    <Layout {...pageProps}>
                        <Component {...pageProps} />
                    </Layout>
                </ConsentProvider>
            </LanguageContext.Provider>
        </>
    )
}
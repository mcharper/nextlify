import { useContext } from "react"
import { ConsentProvider as ReactHooksConsentProvider } from 'react-hook-consent';

import { LanguageContext } from "../LanguageContext";

export const ConsentProvider = ({ children }) => {
  const languageContext = useContext(LanguageContext);

  const { analyticalPurpose } = languageContext.general.metadata;

  const consentProviderOptions = {
    services: [
      {
        id: 'analyticalCookies',
        name: analyticalPurpose,
        // scripts: [
        //     { id: 'external-script', src: 'https://myscript.com/script.js' },
        //     { id: 'inline-code', code: `alert("Example inline code");` },
        // ],
        cookies: [{ pattern: 'cookie-name' }],
        localStorage: ['local-storage-key'],
        sessionStorage: ['session-storage-key'],
        mandatory: false,
      },
    ],
    // customHash: 'my-custom-hash', // optional, e.g. when changing the options based on language
    theme: 'light',
  };

  return (
    <ReactHooksConsentProvider options={consentProviderOptions}>
      {children}
    </ReactHooksConsentProvider>
  );
}


import { useContext } from "react"
import { ConsentBanner as ReactHookConsentBanner } from 'react-hook-consent';

import { LanguageContext } from "../LanguageContext";

export function ConsentBanner() {
  const languageContext = useContext(LanguageContext);

  const { consentMessage, consentDetails, consentModalTitle, yes, no, decline, approve, approveAll } = languageContext.general.metadata;

  const consentBannerSettings = {
    hidden: false,
    label: consentDetails,
    modal: {
      title: consentModalTitle,
      description: consentMessage,
      decline: { hidden: true },
      approve: { label: approve },
      approveAll: { label: approveAll }
    }
  };

  return (
    <ReactHookConsentBanner
      settings={consentBannerSettings}
      decline={{ hidden: false, label: no }}
      approve={{ hidden: false, label: yes }}
    >
      <>
        {consentMessage}
      </>
    </ReactHookConsentBanner>
  )
}

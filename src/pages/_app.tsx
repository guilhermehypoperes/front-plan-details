import { getSkinByName, ThemeContextProvider, VIVO_SKIN } from '@telefonica/mistica'
import type { AppProps } from 'next/app'
import React from 'react'
import "../../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const windowConst = (window as any);
    if (windowConst.webkit) {
      windowConst.webkit.messageHandlers.sendEndLoading.postMessage("planDetails")
    } else if (windowConst.AndroidHandler) {
      windowConst.AndroidHandler.sendEndLoading("planDetails")
    }
    setIsLoading(false);
  }, [])

  return (
    <>
      {!isLoading && (
        <ThemeContextProvider
        theme={{
            skin: getSkinByName(VIVO_SKIN),
            colorScheme: 'light',
            i18n: {
                locale: 'pt-BR',
                phoneNumberFormattingRegionCode: "BR"
            }
        }}
        >
          <Component {...pageProps} />
        </ThemeContextProvider>
      )}
    </>
  )
}

export default MyApp

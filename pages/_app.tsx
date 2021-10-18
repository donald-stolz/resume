import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "lib/gtag";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import additionalContent from "public/data/AdditionalSiteContent.json";
import "styles/default.css";
import "styles/layout.css";
import { AppProps } from "next/dist/shared/lib/router/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <DefaultSeo {...SEO} description={additionalContent.description} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

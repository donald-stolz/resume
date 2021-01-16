import { AppProps } from "next/dist/next-server/lib/router/router";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
import { Container } from "next/app";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import additionalContent from "../public/data/AdditionalSiteContent.json";
import "../styles/default.css";
import "../styles/layout.css";

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
    <Container>
      <DefaultSeo {...SEO} description={additionalContent.description} />
      <Component {...pageProps} />
    </Container>
  );
};

export default MyApp;

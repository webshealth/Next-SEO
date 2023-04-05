import { FC } from "react";
import Script from "next/script";
import { Page } from "@vercel/examples-ui";
import type { LayoutProps } from "@vercel/examples-ui/layout";
import { GaProvider } from "@lib/useGa";
import Navbar from "./navbar";

function throwIfSSR() {
  throw new Error("Using GA during SSR is not allowed");
}

function gaHandler() {
  const dataLayer = ((window as any).dataLayer =
    (window as any).dataLayer || []);

  dataLayer.push(arguments);
}

export default function Layout({ children, ...props }) {
  const ga = typeof window === "undefined" ? throwIfSSR : gaHandler;

  return (
    <>
      <Navbar />
      <Page>
        {/* <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID}`}
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }

          gtag('js', new Date())
          gtag('config', process.env.NEXT_PUBLIC_GOOGLE_TRACKING_ID)
        }}
      /> */}
        <Script
          src={`https://www.googleoptimize.com/optimize.js?id=${process.env.NEXT_PUBLIC_OPTIMIZE_CONTAINER_ID}`}
        />
        <GaProvider value={ga}>{children}</GaProvider>
      </Page>
    </>
  );
}

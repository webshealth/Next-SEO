import Head from "next/head";
import { useEffect, useState } from "react";

export default function useOptimizeAB(experimentId) {
  const [variant, setVariant] = useState();
  useEffect(() => {
    // window.dataLayer.push({ event: "optimize.activate" });
    // let interval = setInterval(() => {
    //   if (window.google_optimize !== undefined) {
    //     const variant = window.google_optimize.get(experimentId);
    //     if (typeof variant !== "undefined") setVariant(Number(variant));
    //     clearInterval(interval);
    //   }
    // }, 100);
  }, []);
  return variant;
}

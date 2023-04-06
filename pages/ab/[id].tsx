import { useEffect } from "react";
import Cookies from "js-cookie";
import { Text, Button } from "@vercel/examples-ui";
import Layout from "@components/layout";
import { getCurrentExperiment } from "@lib/optimize";
import { useGa } from "@lib/useGa";
import { COOKIE_NAME } from "@lib/constants";
import Head from "next/head";

export default function Marketing({ experiment, variant }) {
  const ga = useGa();

  const sendEvent = () => {
    const event = {
      hitType: "event",
      eventCategory: "AB Testing",
      eventAction: "Clicked button",
      eventLabel: "AB Testing About button",
    };
    ga("send", event);
    console.log("sent event:", event);
  };

  useEffect(() => {
    const cookie = Cookies.get(COOKIE_NAME);
    console.log(cookie);
    console.log(ga);
    if (ga && cookie) {
      ga("set", "sample_event_new", cookie);
    }
    ga("send", "pageview");

    <Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `dataLayer.push({ event: "optimize.activate" });
                `,
        }}
      />
    </Head>;
  }, [ga]);

  //   const experiment = getCurrentExperiment();
  console.log(variant, "experiment.heading");
  return (
    <>
      <Text variant="h2" className="mb-6">
        {variant.heading}
      </Text>
      <Text className="text-lg mb-4">
        You&apos;re currently looking at the variant <b>{variant.id}</b> in the
        experiment
        <b>{experiment.name}</b>
      </Text>
      <Text className="mb-4">
        Click the button below to register an event with GA for this variant:
      </Text>
      <Button variant="secondary" onClick={sendEvent}>
        Send event
      </Button>
    </>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params.id, "params");
  const experiment = getCurrentExperiment();

  const [, variantId] = params.id.split(".");

  // Here you could fetch any data related only to the variant
  return {
    props: {
      message: "nothing",
      //   Only send the experiment data required by the page
      experiment: { name: experiment.name },
      variant: experiment.variants.find((v) => String(v.id) === variantId),
    },
  };
}

Marketing.Layout = Layout;

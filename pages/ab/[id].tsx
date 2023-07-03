import { useEffect } from "react";
import Cookies from "js-cookie";
import { Text, Button } from "@vercel/examples-ui";
import Layout from "@components/layout";
import { getCurrentExperiment } from "@lib/optimize";
import { useGa } from "@lib/useGa";
import { COOKIE_NAME } from "@lib/constants";

export default function Marketing({ experiment, variant }) {
  console.log("Newest version");
  const ga = useGa();
  const sendEvent = () => {
    ga("event", "ab_testing", {
      experiment_name: experiment.id,
      variant: variant.name,
    });
  };

  useEffect(() => {
    const cookie = Cookies.get(COOKIE_NAME);

    if (ga && cookie) {
      ga("event", "google", { value: cookie });
    }
    ga("send", "pageview");
  }, [ga]);

  // useEffect(() => {
  //   ga("event", "ab_testing", {
  //     experiment_name: experiment.id,
  //     variant: variant.name,
  //   });
  // }, []);

  //   const experiment = getCurrentExperiment();

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
  const experiment = getCurrentExperiment();

  const [, variantId] = params.id.split(".");

  // Here you could fetch any data related only to the variant
  return {
    props: {
      message: "nothing",
      //   Only send the experiment data required by the page
      experiment: experiment,
      variant: experiment.variants.find((v) => String(v.id) === variantId),
    },
  };
}

Marketing.Layout = Layout;

import { Button, Text } from "@vercel/examples-ui";
import Layout from "@components/layout";
import { useEffect } from "react";
import { useGa } from "@lib/useGa";
import { getCurrentExperiment } from "@lib/optimize";

export default function About({ experiment, variant }) {
  const sendEvent = () => {
    ga("event", "ab_testing", {
      experiment_name: experiment.id,
      variant: variant.name,
    });
  };
  const ga = useGa();
  // useEffect(() => {
  //   ga("event", "ab_testing", {
  //     experiment_name: experiment.id,
  //     variant: "0",
  //   });
  // }, []);
  return (
    <>
      <Text variant="h2" className="mb-6">
        About page
      </Text>
      <Text className="text-lg mb-4">
        You are currently on <b>/about</b>
      </Text>
      <Text>This is the original About page</Text>
      <Button variant="secondary" onClick={sendEvent}>
        Send event
      </Button>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const experiment = getCurrentExperiment();

  // Here you could fetch any data related only to the variant
  return {
    props: {
      message: "nothing",
      //   Only send the experiment data required by the page
      experiment: experiment,
      variant: "0",
    },
  };
}

About.Layout = Layout;

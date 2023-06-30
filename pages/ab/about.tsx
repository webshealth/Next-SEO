import { Text } from '@vercel/examples-ui';
import Layout from '@components/layout';
import { useEffect } from 'react';
import { useGa } from '@lib/useGa';
import Cookies from 'js-cookie';
import { COOKIE_NAME } from '@lib/constants';
import { getCurrentExperiment } from '@lib/optimize';

export default function Marketing({ experiment, variant }) {
  const ga = useGa();
  const sendEvent = () => {
    const event = {
      hitType: 'event',
      eventCategory: 'AB Testing',
      eventAction: 'Clicked button',
      eventLabel: 'AB Testing About button',
    };
    ga('send', event);
    console.log('sent event:', event);
  };

  useEffect(() => {
    console.log('Running 0');
    ga('event', 'ab_testing', {
      experiment_name: experiment.name,
      variant: variant,
    });
  }, []);

  return (
    <>
      <Text variant="h2" className="mb-6">
        About page
      </Text>
      <Text className="text-lg mb-4">
        You are currently on <b>/about</b>
      </Text>
      <Text>This is the original About page</Text>
    </>
  );
}

export async function getServerSideProps(params) {
  console.log(params, 'params');
  const experiment = getCurrentExperiment();

  // const [, variantId] = params.id.split('.');

  // Here you could fetch any data related only to the variant
  return {
    props: {
      message: 'nothing',
      //   Only send the experiment data required by the page
      experiment: { name: experiment.name },
      variant: 'A',
    },
  };
}

Marketing.Layout = Layout;

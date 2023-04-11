import { GrowthBook } from "@growthbook/growthbook-react";

const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-z3T7zetC0cP11BYm",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

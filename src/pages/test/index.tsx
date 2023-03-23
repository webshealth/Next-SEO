import { useEffect } from "react";
import { Experiment, Variant } from "react-optimize";
import styles from "./styles.module.css";

function Test() {
  // function useGoogleOptimize<T>(
  //   experimentId: string,
  //   variants: T[],
  //   timeout?: number
  // ): T | null;
  const variant = useGoogleOptimize(
    "OCPZG-yPR9acbDBEXPcxVg",
    [false, true],
    1000
  );

  console.log(variant);
  return (
    <div>
      <Experiment id="lsAf1p90TZOk2bL9aAm3eA">
        <Variant id="0">Original</Variant>
        <Variant id="1">Variant 1</Variant>
        <Variant id="2">Variant 2</Variant>
      </Experiment> */}
      {variant === null ? "Loading..." : variant ? "A" : "B"}
    </div>
  );
}

export default Test;

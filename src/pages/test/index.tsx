import { useEffect } from 'react';
import { Experiment, Variant } from 'react-optimize';
import styles from './styles.module.css';

function Test() {
  return (
    <div>
      <h2>Test</h2>
      <Experiment id="lsAf1p90TZOk2bL9aAm3eA">
        <Variant id="0">Original</Variant>
        <Variant id="1">Variant 1</Variant>
        <Variant id="2">Variant 2</Variant>
      </Experiment>
    </div>
  );
}

export default Test;

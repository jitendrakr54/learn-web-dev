import React, { useCallback, useMemo, useState } from "react";

function Performance() {
  const [count, setCount] = useState(0);

  let c1 = useMemo(() => {
    setCount((state) => ++state);
  }, count);

  const handler = useCallback(() => {
    setCount((state) => ++state);
  }, []);

  return <div onClick={handler}>{count}</div>;
}

export default Performance;

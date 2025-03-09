import { useEffect, useState } from 'react';

export default function Test() {
  const [testState, setTestState] = useState(0);
  useEffect(() => {
    setTestState(2000);
  }, []);
  return <>{testState}</>;
}

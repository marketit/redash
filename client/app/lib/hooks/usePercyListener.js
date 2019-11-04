import { useState, useEffect } from 'react';

function usePercyListener() {
  const [inPercy, setInPercy] = useState(false);

  useEffect(() => {
    const percyWatch = window.matchMedia('percy');
    const handleChange = (e) => {
      setInPercy(e.matches);
    };
    percyWatch.addListener(handleChange);
    return () => percyWatch.removeListener(handleChange);
  }, []);
  return inPercy;
}

export default usePercyListener;

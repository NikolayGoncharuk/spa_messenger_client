import React from 'react';

export default function useWidth(ref, setWidth) {
  React.useEffect(() => {
    const getRefWidth = () => {
      if (ref.current) {
        return (Math.max(
          ref.current.scrollWidth,
          ref.current.offsetWidth,
          ref.current.clientWidth,
        ));
      };
    };
    setWidth(getRefWidth());
    window.addEventListener('resize', () => {
      setWidth(getRefWidth());
    });
  }, []);
};
import React from 'react';

export default function useWidth(ref, action) {
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
    action(getRefWidth());
    window.addEventListener('resize', () => {
      action(getRefWidth());
    });
  }, []);
};
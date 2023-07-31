import { mount } from 'marketing/MarketingApp';
import { useEffect, useRef } from 'react';
import React from 'react';

export default function MarketingApp() {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
}

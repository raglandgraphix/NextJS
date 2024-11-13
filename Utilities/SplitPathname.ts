'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export const SplitPathname = () => {
  const [product, setProduct] = useState<string | null>(null);
  const [rangeColors, setRangeColors] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname.split('/');
    if (parts.length > 1) {
      setProduct(parts[1]);
      setRangeColors(parts[2].includes('-') ? pathname.split('-')[1] : null);
    }
    console.log(rangeColors);
  }, [pathname,  rangeColors]);

  return { product, setProduct,  rangeColors, setRangeColors };
};
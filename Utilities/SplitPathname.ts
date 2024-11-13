'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export const SplitPathname = () => {
  const [Product, setProduct] = useState<string | null>(null);
  const [RangeColors, setRangeColors] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname.split('/');
    if (parts.length > 1) {
      setProduct(parts[1]);
      setRangeColors(parts[2].includes('-') ? pathname.split('-')[1] : null);
    }
    console.log(RangeColors);
  }, [pathname,  RangeColors]);

  return { Product, setProduct,  RangeColors, setRangeColors };
};
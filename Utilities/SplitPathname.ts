'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


export const SplitPathname = () => {
  const [Product, setProduct] = useState<string | null>(null);
  const [RangeColors, setRangeColors] = useState<string | null>(null);
  const [Page,setPage]=useState<string | null>(null);
  const [Project,setProject]=useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const parts = pathname.split('/');
    
    if (parts.length > 1) {
      setProduct(parts[1]);
      if(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2] !=='Colors'){
        setProject(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2])
      }
      
        setRangeColors(parts[2].includes('-') ? pathname.split('-')[1] : null);
     
      
      setPage(parts[2].includes('-') ? parts[2].split('-')[0] : parts[2]);
    }
    console.log(Product);
    console.log(RangeColors);
    console.log(Page);
    console.log(Project);
  }, [pathname,Product, RangeColors,Page]);
  return { Product, setProduct,Page,setPage, RangeColors, setRangeColors,Project, setProject };
};
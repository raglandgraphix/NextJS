// app/_colorPopRedirect.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useSearchParams

export default function ColorPop() {
  
  const router = useRouter();
  const searchParams = useSearchParams(); // Get the query parameters
  

  

  useEffect(() => {
   

   
   const getFirstParamKey = () => {
    // Get an iterator of the keys
    const iterator = searchParams&& searchParams.keys()

    // Get the first key from the iterator (or undefined if no keys)
    const firstKey = iterator?.next().value;

    return firstKey;
  };

  const ProductValue = getFirstParamKey();
    //const thinBrick = searchParams?.get('Thin Brick'); // Access 'Thin Brick'
    
    if (ProductValue==='Face Brick') {
      router.push('/FaceBrick/Colors');
    } else if (ProductValue==='Thin Brick') {
      router.push('/ThinBrick/Colors');
    } else {
      
      router.push('/FaceBrick/Colors');
    }
  }, []);
  

  return (
    <p>Redirecting to the appropriate Endicott page</p>
  ) // Or a loading indicator
}
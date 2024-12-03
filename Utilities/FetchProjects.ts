import { useEffect } from "react";
import { Job } from "../Types/ProjectTypes";
import { usePathname } from "next/navigation";
//import { DataItem } from "../Types/SizesTypes";
export async function FetchProjects(Product: string | null): Promise<Job[] | null> {
    
    // useEffect(()=>{
    //     const path = usePathname();
    //     console.log('path');
    // })
    
    let jsonFilePath = '/JSON/FaceBrickProjects.json'; // Default path
  
    if (Product === 'FaceBrick') {
      jsonFilePath = '/JSON/FaceBrickProjects.json';
    } else if (Product === 'ThinBrick') {
      jsonFilePath = '/JSON/ThinBrickProjects.json';
    } else if (Product === 'Paver') {
      jsonFilePath = '/JSON/PaverProjects.json';
    }
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: Job[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
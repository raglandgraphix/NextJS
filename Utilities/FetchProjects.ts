import { Job } from "../Types/ProjectTypes";
//import { DataItem } from "../Types/SizesTypes";
export async function FetchProjects(product: string | null): Promise<Job[] | null> {
    let jsonFilePath = '/JSON/FaceBrickProjects.json'; // Default path
  
    if (product === 'FaceBrick') {
      jsonFilePath = '/JSON/FaceBrickProjects.json';
    } else if (product === 'ThinBrick') {
      jsonFilePath = '/JSON/ThinBrickProjects.json';
    } else if (product === 'Paver') {
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
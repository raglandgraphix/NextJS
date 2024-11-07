
import { DataItem } from "../Types/SizesTypes";
export async function FetchSizes(product: string | null): Promise<DataItem[] | null> {
    let jsonFilePath = '/JSON/Sizes.json'; // Default path
  
    // if (product === 'FaceBrick') {
    //   jsonFilePath = '/JSON/FacebrickColors.json';
    // } else if (product === 'ThinBrick') {
    //   jsonFilePath = '/JSON/ThinbrickColors.json';
    // } else if (product === 'Paver') {
    //   jsonFilePath = '/JSON/PaverColors.json';
    // }
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: DataItem[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
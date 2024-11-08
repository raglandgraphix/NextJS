import { TextureData } from "../Types/TextureTypes";
export async function FetchTexture(texture: string | null): Promise<TextureData[] | null> {
    let jsonFilePath = '/JSON/Textures.json'; // Default path
  
    
  
    try {
      const response = await fetch(jsonFilePath);
      const jsonData: TextureData[] = await response.json();
      return jsonData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
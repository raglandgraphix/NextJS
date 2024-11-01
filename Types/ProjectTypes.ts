export type Product = {
    color: string;
    colorSafe: string;
    size: string;
    texture: string;
    qty: string;
    orderNum: string;
  }
  
  export type Job = {
    productName: string;
    productType: string;
    jobTitle: string;
    jobName: string;
    products: { [key: string]: Product }; // Index signature for 'products'
    location: string;
    city: string;
    stateLong: string;
    stateShort: string;
    distributor: string;
    architect: string;
    structuralEngineer: string;
    constructionManager: string;
    facadeEngineer: string;
    masonryContractor: string;
    jobSize: string;
    cost: string;
    masonryBudget: string;
    completed: string;
    index: number | string; // Can be number or string
    jobThumb: string;
    mainPhoto: string;
    photoAlbum: string[];
    gotoLocation?: string; // Optional property
    coord?: string[];    // Optional property
    gMapsImage?: string;  // Optional property
    architect1?: string; // Optional property
    precaster?: string;  // Optional property
    extra?: string;      // Optional property
  }
  
  export type BrickData = {
    FaceBrick: { [key: string]: Job };
    ThinBrick: { [key: string]: Job };
    Pavers: { [key: string]: Job };
  }
  
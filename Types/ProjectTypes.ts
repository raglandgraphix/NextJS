export type Product = {
    color: string;
    colorSafe: string;
    size: string;
    texture: string;
    qty: string;
    orderNum: string;
  }
  
export type Products = {
    product1: Product;
    product2?: Product; // Make product2 and subsequent products optional
    product3?: Product;
    product4?: Product;
    product5?: Product;
    product6?: Product;
  }
  
export type Job = {
    productName: string;
    productType: string;
    jobTitle: string;
    jobName: string;
    altTag: string;
    products: Products;
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
    index: number;
    jobThumb: string;
    mainPhoto: string;
    photoAlbum: string[];
    gotoLocation?: string; // Optional property
    coord?: string[]; // Optional property
    gMapsImage?: string; // Optional property
    architect1?: string; // Optional property
    colorRange:string[];
    "mainImage-Fallback"?: string; // Optional property with hyphen in key
  }
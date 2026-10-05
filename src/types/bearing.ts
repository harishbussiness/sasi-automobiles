export type BearingCategory = 'lorry' | 'tractor' | 'two-wheeler' | 'daily-appliances' | 'coolants';

export type BearingType = 
  | 'Deep Groove Ball Bearing' 
  | 'Tapered Roller Bearing' 
  | 'Pillow Block / Flange Unit' 
  | 'Clutch Release Bearing' 
  | 'Needle Roller Bearing'
  | 'Angular Contact Bearing'
  | 'Radiator & Engine Coolant';

export type SealType = 
  | 'Rubber Sealed (2RS)' 
  | 'Metal Shield (ZZ)' 
  | 'Open' 
  | 'Heavy Duty Double Lip'
  | 'Heavy Duty Concentrate (1:3)'
  | 'Ready to Use Formula'
  | 'Sealed Bottle';

export interface BearingDimensions {
  bore: number;         // inner diameter (d) in mm
  outerDiameter: number; // outer diameter (D) in mm
  width: number;        // width / thickness (B) in mm
}

export interface Bearing {
  id: string;
  partNumber: string;
  name: string;
  category: BearingCategory;
  categoryName: string;
  bearingType: BearingType;
  sealType: SealType;
  dimensions: BearingDimensions;
  price: number;              // In INR (₹)
  mrp?: number;               // Maximum Retail Price (₹)
  priceOnEnquiry?: boolean;   // True if price is on inquiry
  wholesalePrice: number;     // Box / 10+ pcs price in INR (₹)
  minWholesaleQty: number;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewsCount: number;
  image: string;
  popular?: boolean;
  heavyDuty?: boolean;
  applications: string[];
  compatibleBrands: string[];
  specs: {
    material: string;
    clearance: string;
    dynamicLoad: string;      // Cr in kN
    staticLoad: string;       // C0r in kN
    limitingSpeed: string;    // RPM
    lubrication: string;
    weight: string;           // in grams or kg
  };
}

export interface CartItem {
  bearing: Bearing;
  quantity: number;
}

export interface DimensionSearchFilter {
  bore?: number;
  outerDiameter?: number;
  width?: number;
  tolerance: number; // in mm
}

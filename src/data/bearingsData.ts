import { Bearing } from "../types/bearing";

export const HERO_IMAGE = "/src/assets/images/hero_bearings_showcase_1790999139548.webp";
export const CAT_LORRY_IMG = "/src/assets/images/cat_lorry_bearing_1790999154388.webp";
export const CAT_TRACTOR_IMG = "/src/assets/images/cat_tractor_bearing_1790999166736.webp";
export const CAT_TWOWHEELER_IMG = "/src/assets/images/cat_twowheeler_bearing_1790999179519.webp";
export const CAT_APPLIANCE_IMG = "/src/assets/images/cat_appliance_bearing_1790999191306.webp";

export const CATEGORIES_CONFIG = [
  {
    id: "all",
    label: "All Products",
    description: "Complete range of genuine PowerDrive precision bearings and automotive coolants",
    count: 76,
  },
  {
    id: "coolants",
    label: "Coolants & Fluids",
    description: "Premium radiator & engine coolants for HCVs, tractors, passenger cars & two wheelers",
    image: "/products images/PowerDrive_Coolant_1L_1448x1086.webp",
    count: 3,
  },
  {
    id: "lorry",
    label: "Lorry & HCV",
    description: "Commercial trucks, trailers, Ashok Leyland & Tata axles, UJ Cross & Kingpins",
    image: CAT_LORRY_IMG,
    count: 38,
  },
  {
    id: "tractor",
    label: "Tractor & Agri",
    description: "Mahindra, Swaraj, John Deere, PTO shafts, rotavators & combines",
    image: CAT_TRACTOR_IMG,
    count: 19,
  },
  {
    id: "two-wheeler",
    label: "Two Wheeler",
    description: "Hero, Honda, Bajaj, Yamaha, TVS wheels, crankshafts & steering stems",
    image: CAT_TWOWHEELER_IMG,
    count: 8,
  },
  {
    id: "daily-appliances",
    label: "Daily Appliances",
    description: "Ceiling fans, submersible water pumps, washing machines & power tools",
    image: CAT_APPLIANCE_IMG,
    count: 6,
  },
];

export const BEARINGS_CATALOG: Bearing[] = [
  {
    "id": "pdb-coolant-500ml",
    "partNumber": "COOLANT 500ML",
    "name": "COOLANT 500ML",
    "category": "coolants",
    "categoryName": "Coolants & Fluids",
    "bearingType": "Radiator & Engine Coolant",
    "sealType": "Ready to Use Formula",
    "dimensions": {
      "bore": 0,
      "outerDiameter": 0,
      "width": 0
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 150,
    "rating": 5,
    "reviewsCount": 24,
    "image": "/products images/COOLENT 500ML.webp",
    "heavyDuty": true,
    "popular": true,
    "applications": [
      "Motorcycle & Scooter Radiators",
      "Passenger Cars & Light Commercial Vehicles",
      "Stationary Generator Sets",
      "Agricultural Pump Engines"
    ],
    "compatibleBrands": [
      "Hero",
      "Honda",
      "Bajaj",
      "TVS",
      "Yamaha",
      "Maruti Suzuki"
    ],
    "specs": {
      "material": "Ethylene Glycol with Advanced Organic Acid Technology (OAT)",
      "clearance": "500 ML Bottle Pack",
      "dynamicLoad": "-15°C Freezing Protection",
      "staticLoad": "+125°C Anti-Boiling Point",
      "limitingSpeed": "Rust & Corrosion Inhibition",
      "lubrication": "Ready to Use / Premixed",
      "weight": "0.55 kg"
    }
  },
  {
    "id": "pdb-coolant-1l",
    "partNumber": "COOLANT 1L",
    "name": "COOLANT 1L",
    "category": "coolants",
    "categoryName": "Coolants & Fluids",
    "bearingType": "Radiator & Engine Coolant",
    "sealType": "Heavy Duty Concentrate (1:3)",
    "dimensions": {
      "bore": 0,
      "outerDiameter": 0,
      "width": 0
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 200,
    "rating": 5,
    "reviewsCount": 38,
    "image": "/products images/PowerDrive_Coolant_1L_1448x1086.webp",
    "heavyDuty": true,
    "popular": true,
    "applications": [
      "Commercial HCV Trucks & Lorries",
      "Tractors & Harvesting Machinery",
      "SUVs, Cars & Commercial Vans",
      "Industrial Diesel Engines"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland",
      "Mahindra",
      "Swaraj",
      "Eicher",
      "John Deere"
    ],
    "specs": {
      "material": "Concentrated Long-Life Coolant with Silicate-Free Inhibitors",
      "clearance": "1 Litre Sealed Bottle",
      "dynamicLoad": "-20°C Freezing Protection",
      "staticLoad": "+130°C Anti-Boiling Protection",
      "limitingSpeed": "Extended 100,000 KM Drain Interval",
      "lubrication": "Dilution Ratio 1:3 with Distilled Water",
      "weight": "1.15 kg"
    }
  },
  {
    "id": "pdb-coolant-3l",
    "partNumber": "COOLANT 3L",
    "name": "COOLANT 3L",
    "category": "coolants",
    "categoryName": "Coolants & Fluids",
    "bearingType": "Radiator & Engine Coolant",
    "sealType": "Heavy Duty Concentrate (1:3)",
    "dimensions": {
      "bore": 0,
      "outerDiameter": 0,
      "width": 0
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 4,
    "inStock": true,
    "stockCount": 120,
    "rating": 5,
    "reviewsCount": 42,
    "image": "/products images/PowerDrive_Coolant_3L_Square_1536.webp",
    "heavyDuty": true,
    "popular": true,
    "applications": [
      "Heavy Commercial Lorries & Multi-Axle Trailers",
      "High-HP Tractors & Rotavators",
      "Heavy Earthmoving Equipment & JCBs",
      "Fleet Maintenance Garages"
    ],
    "compatibleBrands": [
      "Ashok Leyland 1618 / 2518 / 4019",
      "Tata Signa / Prima",
      "BharatBenz",
      "Mahindra Novo / Swaraj 855",
      "Sonalika"
    ],
    "specs": {
      "material": "Heavy-Duty Fleet Formula with Cavitation Protection",
      "clearance": "3 Litre Heavy Duty Jerry Can Pack",
      "dynamicLoad": "-25°C Frost & Ice Shield",
      "staticLoad": "+135°C Heavy Load Boil Guard",
      "limitingSpeed": "Protects Water Pump Seals & Aluminium Cores",
      "lubrication": "Heavy Commercial 1:3 Concentrate",
      "weight": "3.35 kg"
    }
  },
  {
    "id": "pdb-6201-2rs",
    "partNumber": "6201 2RS",
    "name": "6201 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 12,
      "outerDiameter": 32,
      "width": 10
    },
    "price": 67,
    "priceOnEnquiry": false,
    "wholesalePrice": 59,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 19,
    "image": "/products images/6201 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Motorcycle Front Wheel",
      "Ceiling Fan Top",
      "Washing Machine Motor"
    ],
    "compatibleBrands": [
      "Hero",
      "Honda Activa",
      "Bajaj",
      "Crompton"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 67,
    "popular": true
  },
  {
    "id": "pdb-6202-2rs",
    "partNumber": "6202 2RS",
    "name": "6202 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 15,
      "outerDiameter": 35,
      "width": 11
    },
    "price": 85,
    "priceOnEnquiry": false,
    "wholesalePrice": 75,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 20,
    "image": "/products images/6202 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Ceiling Fan Bottom Bearing",
      "Scooter Front Hub",
      "Water Pump Motor"
    ],
    "compatibleBrands": [
      "Usha",
      "Havells",
      "Honda Activa",
      "TVS Jupiter"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 85,
    "popular": true
  },
  {
    "id": "pdb-6203-2rs",
    "partNumber": "6203 2RS",
    "name": "6203 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 17,
      "outerDiameter": 40,
      "width": 12
    },
    "price": 105,
    "priceOnEnquiry": false,
    "wholesalePrice": 92,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 21,
    "image": "/products images/6203 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Motorcycle Rear Wheel",
      "Alternator Rotor",
      "High-Speed Pump"
    ],
    "compatibleBrands": [
      "Bajaj Pulsar",
      "Hero Glamour",
      "Yamaha",
      "Bosch"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 105,
    "popular": true
  },
  {
    "id": "pdb-6204-2rs",
    "partNumber": "6204 2RS",
    "name": "6204 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 20,
      "outerDiameter": 47,
      "width": 14
    },
    "price": 138,
    "priceOnEnquiry": false,
    "wholesalePrice": 121,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 22,
    "image": "/products images/6204 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Royal Enfield Wheel Hub",
      "Compressor Motor",
      "Submersible Pump"
    ],
    "compatibleBrands": [
      "Royal Enfield Bullet",
      "Kirloskar",
      "Texmo"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 138,
    "popular": true
  },
  {
    "id": "pdb-6205-2rs",
    "partNumber": "6205 2RS",
    "name": "6205 2RS",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 25,
      "outerDiameter": 52,
      "width": 15
    },
    "price": 154,
    "priceOnEnquiry": false,
    "wholesalePrice": 136,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 23,
    "image": "/products images/6205 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Mono-Block Water Pump",
      "Industrial Fan",
      "Washing Machine Tub"
    ],
    "compatibleBrands": [
      "CRI Pumps",
      "Texmo",
      "LG",
      "Samsung"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 154,
    "popular": true
  },
  {
    "id": "pdb-1265",
    "partNumber": "1265",
    "name": "1265",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 65,
      "outerDiameter": 120,
      "width": 23
    },
    "price": 2016,
    "mrp": 2016,
    "priceOnEnquiry": false,
    "wholesalePrice": 1750,
    "minWholesaleQty": 5,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 13,
    "image": "/products images/1265.webp?v=3",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Commercial Axle",
      "Industrial Drive Shaft",
      "Gearbox Assembly"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland",
      "BharatBenz"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    }
  },
  {
    "id": "pdb-09067-09195",
    "partNumber": "09067/09195",
    "name": "09067/09195",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 19.05,
      "outerDiameter": 49.225,
      "width": 18.034
    },
    "price": 321,
    "mrp": 321,
    "priceOnEnquiry": false,
    "wholesalePrice": 285,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "/products images/09067_09195.webp?v=3",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Steering Column & Pinion Shaft",
      "Commercial Hub",
      "Tractor Front Wheel"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors",
      "Mahindra"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    }
  },
  {
    "id": "pdb-25877-21",
    "partNumber": "25877/21",
    "name": "25877/21",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 34.925,
      "outerDiameter": 73.025,
      "width": 23.812
    },
    "price": 570,
    "priceOnEnquiry": false,
    "wholesalePrice": 502,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 15,
    "image": "/products images/25877_21.webp?v=3",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Heavy Truck Wheel End",
      "Differential Drive",
      "Intermediate Shaft"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 570
  },
  {
    "id": "pdb-30305",
    "partNumber": "30305",
    "name": "30305",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 25,
      "outerDiameter": 62,
      "width": 18.25
    },
    "price": 261,
    "priceOnEnquiry": false,
    "wholesalePrice": 228,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/30305.webp",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Tractor Front Hub",
      "Pinion Shaft",
      "Automotive Differential",
      "Rotavator Transmission"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "Tata Motors",
      "Eicher",
      "Sonalika"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "35.8 kN",
      "staticLoad": "38.5 kN",
      "limitingSpeed": "7,200 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.26 kg"
    },
    "mrp": 326
  },
  {
    "id": "pdb-30207",
    "partNumber": "30207",
    "name": "30207",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 72,
      "width": 18.25
    },
    "price": 457,
    "priceOnEnquiry": false,
    "wholesalePrice": 402,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 17,
    "image": "/products images/30207-1.webp?v=3",
    "popular": true,
    "heavyDuty": false,
    "applications": [
      "Tractor Front Hub",
      "Rotavator Transmission",
      "Harvester Axle"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "John Deere"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 457
  },
  {
    "id": "pdb-30208",
    "partNumber": "30208",
    "name": "30208",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 80,
      "width": 19.75
    },
    "price": 514,
    "priceOnEnquiry": false,
    "wholesalePrice": 452,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/30208.webp",
    "popular": true,
    "heavyDuty": false,
    "applications": [
      "Tractor Rear Reduction",
      "Gearbox Pinion",
      "PTO Shaft Support"
    ],
    "compatibleBrands": [
      "Swaraj",
      "Mahindra",
      "Sonalika",
      "Massey Ferguson"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 514
  },
  {
    "id": "pdb-30209",
    "partNumber": "30209",
    "name": "30209",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 45,
      "outerDiameter": 85,
      "width": 20.75
    },
    "price": 562,
    "priceOnEnquiry": false,
    "wholesalePrice": 495,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 19,
    "image": "/products images/30209.webp",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Commercial Truck Hub",
      "LCV Axle",
      "Differential Carrier"
    ],
    "compatibleBrands": [
      "Tata 407",
      "Eicher Pro",
      "Mahindra Bolero Maxi"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 562
  },
  {
    "id": "pdb-30210",
    "partNumber": "30210",
    "name": "30210",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 50,
      "outerDiameter": 90,
      "width": 21.75
    },
    "price": 653,
    "priceOnEnquiry": false,
    "wholesalePrice": 575,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 20,
    "image": "/products images/30210.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Duty Truck Hub",
      "Trailer Idler",
      "Differential Side"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors",
      "BharatBenz"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 653
  },
  {
    "id": "pdb-32007",
    "partNumber": "32007",
    "name": "32007",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 62,
      "width": 18
    },
    "price": 375,
    "priceOnEnquiry": false,
    "wholesalePrice": 330,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 22,
    "image": "/products images/32007.webp",
    "heavyDuty": false,
    "applications": [
      "Agri Machinery",
      "Tractor Steering",
      "Thresher Gearbox"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "Escorts Farmtrac"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 375
  },
  {
    "id": "pdb-32008",
    "partNumber": "32008",
    "name": "32008",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 68,
      "width": 19
    },
    "price": 396,
    "priceOnEnquiry": false,
    "wholesalePrice": 348,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 23,
    "image": "/products images/32008.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Axle Pinion",
      "Baler Input Shaft",
      "Rotavator Hub"
    ],
    "compatibleBrands": [
      "John Deere",
      "Mahindra",
      "Kubota"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 396
  },
  {
    "id": "pdb-32206",
    "partNumber": "32206",
    "name": "32206",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 30,
      "outerDiameter": 62,
      "width": 21.25
    },
    "price": 449,
    "priceOnEnquiry": false,
    "wholesalePrice": 395,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 25,
    "image": "/products images/32206.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Front Wheel Inner",
      "Rotary Tiller",
      "Combine Harvester"
    ],
    "compatibleBrands": [
      "Swaraj",
      "Mahindra",
      "New Holland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 449
  },
  {
    "id": "pdb-32207",
    "partNumber": "32207",
    "name": "32207",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 72,
      "width": 24.25
    },
    "price": 530,
    "priceOnEnquiry": false,
    "wholesalePrice": 466,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 26,
    "image": "/products images/32207.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Wheel Hub",
      "Heavy Cultivator Hub",
      "Plow Axle"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Massey Ferguson",
      "Sonalika"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 530
  },
  {
    "id": "pdb-32208",
    "partNumber": "32208",
    "name": "32208",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 80,
      "width": 24.75
    },
    "price": 599,
    "priceOnEnquiry": false,
    "wholesalePrice": 527,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "/products images/32208.webp",
    "heavyDuty": true,
    "applications": [
      "Medium Commercial Truck Hub",
      "Trailer Axle",
      "Differential Pinion"
    ],
    "compatibleBrands": [
      "Tata 1109",
      "Ashok Leyland Boss",
      "Eicher Pro"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 599
  },
  {
    "id": "pdb-32209",
    "partNumber": "32209",
    "name": "32209",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 45,
      "outerDiameter": 85,
      "width": 24.75
    },
    "price": 637,
    "priceOnEnquiry": false,
    "wholesalePrice": 561,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 13,
    "image": "/products images/32209.webp",
    "heavyDuty": true,
    "applications": [
      "Commercial Axle",
      "Tipper Front Hub",
      "Differential Side Bearing"
    ],
    "compatibleBrands": [
      "Tata 1613",
      "Ashok Leyland 1616",
      "Eicher"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 637
  },
  {
    "id": "pdb-32210",
    "partNumber": "32210",
    "name": "32210",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 50,
      "outerDiameter": 90,
      "width": 24.75
    },
    "price": 674,
    "priceOnEnquiry": false,
    "wholesalePrice": 593,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 14,
    "image": "/products images/32210.webp",
    "heavyDuty": false,
    "applications": [
      "Heavy Tractor Rear Axle",
      "Front Hub Heavy",
      "Differential Pinion"
    ],
    "compatibleBrands": [
      "Mahindra Arjun",
      "John Deere 5050",
      "Swaraj 855"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 674
  },
  {
    "id": "pdb-32212",
    "partNumber": "32212",
    "name": "32212",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 60,
      "outerDiameter": 110,
      "width": 29.75
    },
    "price": 1006,
    "priceOnEnquiry": false,
    "wholesalePrice": 885,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 15,
    "image": "/products images/32212.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Lorry Rear Wheel Inner",
      "Multi-Axle Truck",
      "Trailer Axle"
    ],
    "compatibleBrands": [
      "Tata Signa",
      "Ashok Leyland 2518",
      "BharatBenz 2823"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1006
  },
  {
    "id": "pdb-32213",
    "partNumber": "32213",
    "name": "32213",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 65,
      "outerDiameter": 120,
      "width": 32.75
    },
    "price": 1070,
    "priceOnEnquiry": false,
    "wholesalePrice": 942,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/32213.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Commercial Vehicle Hub",
      "Mining Tipper Axle",
      "10-Wheeler Truck"
    ],
    "compatibleBrands": [
      "Tata 2516",
      "Ashok Leyland Taurus",
      "Eicher Terra"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1070
  },
  {
    "id": "pdb-32216",
    "partNumber": "32216",
    "name": "32216",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 80,
      "outerDiameter": 140,
      "width": 35.25
    },
    "price": 1487,
    "priceOnEnquiry": false,
    "wholesalePrice": 1309,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 17,
    "image": "/products images/32216.webp",
    "heavyDuty": true,
    "applications": [
      "Multi-Axle Trailer Wheel End",
      "York / Knorr Axle",
      "Heavy Prime Mover"
    ],
    "compatibleBrands": [
      "York Axle",
      "Tata Prima",
      "Ashok Leyland Captain"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1487
  },
  {
    "id": "pdb-3780-3720",
    "partNumber": "3780/20",
    "name": "3780/20 (3780/3720)",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 50.8,
      "outerDiameter": 93.264,
      "width": 30.162
    },
    "price": 770,
    "priceOnEnquiry": false,
    "wholesalePrice": 678,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 24,
    "image": "/products images/3780_3720.webp?v=3",
    "heavyDuty": true,
    "applications": [
      "Ashok Leyland Comet / Cheetah Hub",
      "Tata 1210 Front Hub",
      "Commercial Axle"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 770
  },
  {
    "id": "pdb-3984-20",
    "partNumber": "3984/20",
    "name": "3984/20",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 66.675,
      "outerDiameter": 112.712,
      "width": 30.162
    },
    "price": 900,
    "priceOnEnquiry": false,
    "wholesalePrice": 792,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 25,
    "image": "/products images/3984-20.webp",
    "heavyDuty": true,
    "applications": [
      "Leyland Viking Bus Front Hub",
      "Tata Heavy Truck Wheel",
      "Trailer Axle"
    ],
    "compatibleBrands": [
      "Ashok Leyland Viking",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 900
  },
  {
    "id": "pdb-462-453x",
    "partNumber": "462/453x",
    "name": "462/453x",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 57.15,
      "outerDiameter": 104.775,
      "width": 29.37
    },
    "price": 1023,
    "priceOnEnquiry": false,
    "wholesalePrice": 900,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 26,
    "image": "/products images/462-453x.webp",
    "heavyDuty": true,
    "applications": [
      "Tata Commercial Hub",
      "Ashok Leyland Steering / Axle",
      "Bus Front Hub"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1023
  },
  {
    "id": "pdb-580-572",
    "partNumber": "580/572",
    "name": "580/572",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 82.55,
      "outerDiameter": 139.992,
      "width": 36.512
    },
    "price": 1696,
    "priceOnEnquiry": false,
    "wholesalePrice": 1492,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 14,
    "image": "/products images/580-572.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Trailer Hub",
      "Ashok Leyland Heavy Axle",
      "Tata Mining Tipper"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1696
  },
  {
    "id": "pdb-6207-2rs",
    "partNumber": "6207 2RS",
    "name": "6207 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 72,
      "width": 17
    },
    "price": 337,
    "priceOnEnquiry": false,
    "wholesalePrice": 297,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 25,
    "image": "/products images/6207 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor PTO Drive",
      "Rotavator Gearbox",
      "Agricultural Thresher"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "Shaktiman Rotavator"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 337
  },
  {
    "id": "pdb-6312-2rs",
    "partNumber": "6312 2RS",
    "name": "6312 2RS",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 60,
      "outerDiameter": 130,
      "width": 31
    },
    "price": 1418,
    "priceOnEnquiry": false,
    "wholesalePrice": 1248,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 22,
    "image": "/products images/6312 2RS.webp",
    "heavyDuty": true,
    "applications": [
      "Truck Auxiliary Transmission",
      "Splitter Gearbox",
      "Heavy Pulley Shaft"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1418
  },
  {
    "id": "pdb-6313-2rs",
    "partNumber": "6313 2RS",
    "name": "6313 2RS",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 65,
      "outerDiameter": 140,
      "width": 33
    },
    "price": 1571,
    "priceOnEnquiry": false,
    "wholesalePrice": 1382,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 23,
    "image": "/products images/6313 2RS.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Commercial Vehicle Drivetrain",
      "Tipper PTO",
      "Compressor Plant"
    ],
    "compatibleBrands": [
      "Tata Motors Heavy",
      "Ashok Leyland 3118"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1571
  },
  {
    "id": "pdb-lm48548-10",
    "partNumber": "LM48548/10",
    "name": "LM48548/10",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 34.925,
      "outerDiameter": 65.088,
      "width": 18.034
    },
    "price": 332,
    "priceOnEnquiry": false,
    "wholesalePrice": 292,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 14,
    "image": "/products images/LM48548-10.webp",
    "heavyDuty": true,
    "applications": [
      "Mahindra Bolero Front Hub Outer",
      "Tata Ace Front Hub",
      "LCV Wheel End"
    ],
    "compatibleBrands": [
      "Mahindra Bolero",
      "Tata Ace",
      "Maruti Super Carry"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 332
  },
  {
    "id": "pdb-lm501349-10",
    "partNumber": "LM501349/10",
    "name": "LM501349/10",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 41.275,
      "outerDiameter": 73.431,
      "width": 19.558
    },
    "price": 375,
    "priceOnEnquiry": false,
    "wholesalePrice": 330,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 15,
    "image": "/products images/LM501349-10.webp",
    "heavyDuty": true,
    "applications": [
      "Mahindra Pik-Up Hub",
      "Tata 407 Steering & Hub",
      "Isuzu D-Max"
    ],
    "compatibleBrands": [
      "Mahindra Pik-Up",
      "Tata 407",
      "Eicher"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 375
  },
  {
    "id": "pdb-6212-2rs",
    "partNumber": "6212 2RS",
    "name": "6212 2RS",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 60,
      "outerDiameter": 110,
      "width": 22
    },
    "price": 647,
    "mrp": 647,
    "priceOnEnquiry": false,
    "wholesalePrice": 569,
    "minWholesaleQty": 5,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/6312 2RS.webp",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Heavy Transmission Drive",
      "Industrial Motor",
      "Commercial Axle"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland",
      "BharatBenz"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "52.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "6,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.78 kg"
    }
  },
  {
    "id": "pdb-1988-1922",
    "partNumber": "1988/1922",
    "name": "1988/1922",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 28.575,
      "outerDiameter": 57.15,
      "width": 19.845
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 14,
    "image": "/products images/1988_1922.webp?v=3",
    "popular": true,
    "heavyDuty": true,
    "applications": [
      "Steering Knuckle",
      "Pinion Hub",
      "Trailer Axle"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Mahindra",
      "Eicher"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    }
  },
  {
    "id": "pdb-30204",
    "partNumber": "30204",
    "name": "30204",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 20,
      "outerDiameter": 47,
      "width": 15.25
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/30204-1.webp?v=3",
    "popular": true,
    "heavyDuty": false,
    "applications": [
      "Two Wheeler Steering Cone",
      "Motorcycle Front Fork",
      "Scooter Hub"
    ],
    "compatibleBrands": [
      "Hero",
      "Honda",
      "Bajaj",
      "Royal Enfield"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    }
  },
  {
    "id": "pdb-320-332x",
    "partNumber": "320/332x",
    "name": "320/332x",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 32,
      "outerDiameter": 58,
      "width": 17
    },
    "price": 342,
    "priceOnEnquiry": false,
    "wholesalePrice": 301,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 21,
    "image": "/products images/320-332x.webp",
    "heavyDuty": true,
    "applications": [
      "Steering Gear",
      "LCV Steering Worm",
      "Transmission Shaft"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 342
  },
  {
    "id": "pdb-32009x",
    "partNumber": "32009X",
    "name": "32009X",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 45,
      "outerDiameter": 75,
      "width": 20
    },
    "price": 524,
    "priceOnEnquiry": false,
    "wholesalePrice": 461,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 24,
    "image": "/products images/32009X.webp",
    "heavyDuty": true,
    "applications": [
      "LCV Front Hub",
      "Commercial Gearbox",
      "Trailer Pivot"
    ],
    "compatibleBrands": [
      "Tata 709",
      "Eicher 10.59",
      "Force Traveller"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 524
  },
  {
    "id": "pdb-32308",
    "partNumber": "32308",
    "name": "32308",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 90,
      "width": 35.25
    },
    "price": 931,
    "priceOnEnquiry": false,
    "wholesalePrice": 819,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/32308.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Pinion High-Torque",
      "Crusher Drive",
      "Truck Transfer Case"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 931
  },
  {
    "id": "pdb-33020",
    "partNumber": "33020",
    "name": "33020",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 100,
      "outerDiameter": 150,
      "width": 39
    },
    "price": 2150,
    "priceOnEnquiry": false,
    "wholesalePrice": 1892,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 19,
    "image": "/products images/33020.webp",
    "heavyDuty": true,
    "applications": [
      "Ultra-Heavy Commercial Axle",
      "Low-Bed Trailer",
      "Mining Dump Truck"
    ],
    "compatibleBrands": [
      "Tata Motors Heavy",
      "Ashok Leyland Haulage"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 2150
  },
  {
    "id": "pdb-33116",
    "partNumber": "33116",
    "name": "33116",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 80,
      "outerDiameter": 130,
      "width": 37
    },
    "price": 1691,
    "priceOnEnquiry": false,
    "wholesalePrice": 1488,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 20,
    "image": "/products images/33116.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Truck Rear Differential",
      "Crown Wheel Support",
      "Bogie Suspension"
    ],
    "compatibleBrands": [
      "Ashok Leyland 3118",
      "Tata 3118"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1691
  },
  {
    "id": "pdb-33210",
    "partNumber": "33210",
    "name": "33210",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 50,
      "outerDiameter": 90,
      "width": 32
    },
    "price": 934,
    "priceOnEnquiry": false,
    "wholesalePrice": 822,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 21,
    "image": "/products images/33210.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Duty Pinion",
      "Truck Crown Wheel & Pinion",
      "Reduction Gearbox"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 934
  },
  {
    "id": "pdb-33214",
    "partNumber": "33214",
    "name": "33214",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 70,
      "outerDiameter": 125,
      "width": 41
    },
    "price": 1739,
    "priceOnEnquiry": false,
    "wholesalePrice": 1530,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 22,
    "image": "/products images/33214.webp",
    "heavyDuty": true,
    "applications": [
      "Commercial Axle Hub Heavy",
      "Tipper Rear Axle",
      "Haulage Truck"
    ],
    "compatibleBrands": [
      "Ashok Leyland 2518",
      "Tata 2518 Tipper",
      "BharatBenz"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1739
  },
  {
    "id": "pdb-33217",
    "partNumber": "33217",
    "name": "33217",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 85,
      "outerDiameter": 150,
      "width": 49
    },
    "price": 2696,
    "priceOnEnquiry": false,
    "wholesalePrice": 2372,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 23,
    "image": "/products images/33217.webp",
    "heavyDuty": true,
    "applications": [
      "Multi-Axle Trailer Wheel Hub",
      "Heavy Bogie Axle",
      "Prime Mover Hub"
    ],
    "compatibleBrands": [
      "Tata Prima 4928",
      "Ashok Leyland 4923",
      "York Trailer Axles"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 2696
  },
  {
    "id": "pdb-535-532",
    "partNumber": "535/532",
    "name": "535/532",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 44.45,
      "outerDiameter": 107.95,
      "width": 36.512
    },
    "price": 1412,
    "priceOnEnquiry": false,
    "wholesalePrice": 1243,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "/products images/535-532.webp",
    "heavyDuty": true,
    "applications": [
      "Leyland Taurus Rear Wheel",
      "Tata 1612 Pinion",
      "Heavy Commercial Hub"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1412
  },
  {
    "id": "pdb-565-562",
    "partNumber": "565/562",
    "name": "565/562",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 76.2,
      "outerDiameter": 127,
      "width": 36.512
    },
    "price": 1584,
    "priceOnEnquiry": false,
    "wholesalePrice": 1394,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 13,
    "image": "/products images/565-562.webp",
    "heavyDuty": true,
    "applications": [
      "Tata 1613 Rear Inner Hub",
      "Leyland Cargo Axle",
      "Trailer Wheel End"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1584
  },
  {
    "id": "pdb-6008-2rs",
    "partNumber": "6008 2RS",
    "name": "6008 2RS",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 68,
      "width": 15
    },
    "price": 262,
    "priceOnEnquiry": false,
    "wholesalePrice": 231,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 15,
    "image": "/products images/6008 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Industrial Electric Motors",
      "Water Pumps",
      "Blower Fans"
    ],
    "compatibleBrands": [
      "Kirloskar",
      "Crompton",
      "Havells"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 262
  },
  {
    "id": "pdb-6008",
    "partNumber": "6008",
    "name": "6008",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 68,
      "width": 15
    },
    "price": 246,
    "priceOnEnquiry": false,
    "wholesalePrice": 216,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/6008.webp",
    "heavyDuty": false,
    "applications": [
      "Gearbox Internal",
      "Machine Tool Spindle",
      "Pump Impeller"
    ],
    "compatibleBrands": [
      "Kirloskar",
      "Texmo",
      "CRI Pumps"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 246
  },
  {
    "id": "pdb-6013-wos",
    "partNumber": "6013 WOS",
    "name": "6013 WOS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 65,
      "outerDiameter": 100,
      "width": 18
    },
    "price": 1321,
    "priceOnEnquiry": false,
    "wholesalePrice": 1162,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 17,
    "image": "/products images/6013 WOS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Transmission",
      "PTO Clutch Support",
      "Harvester Rotor"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "John Deere"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1321
  },
  {
    "id": "pdb-62-22-2rs",
    "partNumber": "62/22 2RS",
    "name": "62/22 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 22,
      "outerDiameter": 50,
      "width": 14
    },
    "price": 215,
    "priceOnEnquiry": false,
    "wholesalePrice": 189,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/62-22 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Motorcycle Crankshaft",
      "Rear Wheel Sprocket Hub",
      "Gearbox Shaft"
    ],
    "compatibleBrands": [
      "Hero Splendor",
      "Bajaj Pulsar",
      "Yamaha FZ"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 215
  },
  {
    "id": "pdb-6206-2rs",
    "partNumber": "6206 2RS",
    "name": "6206 2RS",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 30,
      "outerDiameter": 62,
      "width": 16
    },
    "price": 231,
    "priceOnEnquiry": false,
    "wholesalePrice": 203,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 24,
    "image": "/products images/6206 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Agricultural Pump 3HP/5HP",
      "Flour Mill Motor",
      "Air Compressor"
    ],
    "compatibleBrands": [
      "Kirloskar",
      "Suguna",
      "Elgi"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 231
  },
  {
    "id": "pdb-6211-2rs-wos-mod",
    "partNumber": "6211 2RS-WOS-MOD",
    "name": "6211 2RS-WOS-MOD",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 55,
      "outerDiameter": 100,
      "width": 21
    },
    "price": 1204,
    "priceOnEnquiry": false,
    "wholesalePrice": 1060,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 26,
    "image": "/products images/6211 2RS-WOS-MOD.webp",
    "heavyDuty": false,
    "applications": [
      "Modified Tractor Rear Axle",
      "Special Agri Transmission",
      "Harvester"
    ],
    "compatibleBrands": [
      "Mahindra DI",
      "Swaraj 744"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1204
  },
  {
    "id": "pdb-6211-2rs-wos",
    "partNumber": "6211 2RS-WOS",
    "name": "6211 2RS-WOS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 55,
      "outerDiameter": 100,
      "width": 21
    },
    "price": 1242,
    "priceOnEnquiry": false,
    "wholesalePrice": 1093,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "/products images/6211 2RS-WOS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Differential Axle",
      "Tillage Equipment",
      "Rotary Slasher"
    ],
    "compatibleBrands": [
      "Swaraj",
      "Mahindra",
      "Eicher Tractor"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1242
  },
  {
    "id": "pdb-6211-2rs",
    "partNumber": "6211 2RS",
    "name": "6211 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 55,
      "outerDiameter": 100,
      "width": 21
    },
    "price": 551,
    "priceOnEnquiry": false,
    "wholesalePrice": 485,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 13,
    "image": "/products images/6211 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Heavy Tractor Transmission",
      "Heavy Industrial Motor",
      "Conveyor Roller"
    ],
    "compatibleBrands": [
      "John Deere",
      "Mahindra",
      "New Holland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 551
  },
  {
    "id": "pdb-6301-2rs",
    "partNumber": "6301 2RS",
    "name": "6301 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 12,
      "outerDiameter": 37,
      "width": 12
    },
    "price": 93,
    "priceOnEnquiry": false,
    "wholesalePrice": 82,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 14,
    "image": "/products images/6301 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Motorcycle Wheel Hub",
      "High-Torque Power Tools",
      "Starter Motor"
    ],
    "compatibleBrands": [
      "Hero Passion",
      "Honda Shine",
      "Bosch Tools"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 93
  },
  {
    "id": "pdb-6304-2rs",
    "partNumber": "6304 2RS",
    "name": "6304 2RS",
    "category": "two-wheeler",
    "categoryName": "Two Wheeler",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 20,
      "outerDiameter": 52,
      "width": 15
    },
    "price": 0,
    "priceOnEnquiry": true,
    "wholesalePrice": 0,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 15,
    "image": "/products images/6304 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Crankshaft Primary Drive",
      "Motorcycle Engine Case",
      "High-Pressure Washer"
    ],
    "compatibleBrands": [
      "Bajaj Discover",
      "TVS Apache",
      "Hero"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    }
  },
  {
    "id": "pdb-6305-2rs",
    "partNumber": "6305 2RS",
    "name": "6305 2RS",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 25,
      "outerDiameter": 62,
      "width": 17
    },
    "price": 231,
    "priceOnEnquiry": false,
    "wholesalePrice": 203,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/6305 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Heavy Duty Monoblock Pump",
      "Borewell Submersible Head",
      "Industrial Mixer"
    ],
    "compatibleBrands": [
      "Texmo",
      "CRI",
      "Kirloskar"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 231
  },
  {
    "id": "pdb-6306",
    "partNumber": "6306",
    "name": "6306",
    "category": "daily-appliances",
    "categoryName": "Daily Appliances",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 30,
      "outerDiameter": 72,
      "width": 19
    },
    "price": 381,
    "priceOnEnquiry": false,
    "wholesalePrice": 335,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 17,
    "image": "/products images/6306.webp",
    "heavyDuty": false,
    "applications": [
      "Open Well Submersible",
      "Induction Motor",
      "Gearbox Idler"
    ],
    "compatibleBrands": [
      "Kirloskar",
      "Suguna",
      "L&T Motors"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 381
  },
  {
    "id": "pdb-6307-2rs",
    "partNumber": "6307 2RS",
    "name": "6307 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 80,
      "width": 21
    },
    "price": 457,
    "priceOnEnquiry": false,
    "wholesalePrice": 402,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/6307 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Crown Wheel",
      "Clutch Release Pilot",
      "Combine Drive"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "Sonalika"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 457
  },
  {
    "id": "pdb-6308-2rs",
    "partNumber": "6308 2RS",
    "name": "6308 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 40,
      "outerDiameter": 90,
      "width": 23
    },
    "price": 609,
    "priceOnEnquiry": false,
    "wholesalePrice": 536,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 19,
    "image": "/products images/6308 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Bull Gear Shaft",
      "Heavy Rotavator Drive",
      "Centrifugal Pump"
    ],
    "compatibleBrands": [
      "Mahindra 575",
      "Swaraj 735",
      "Fieldking"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 609
  },
  {
    "id": "pdb-6310-2rs",
    "partNumber": "6310 2RS",
    "name": "6310 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 50,
      "outerDiameter": 110,
      "width": 27
    },
    "price": 869,
    "priceOnEnquiry": false,
    "wholesalePrice": 765,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 20,
    "image": "/products images/6310 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Large Agricultural Machine",
      "Tractor Rear Axle Carrier",
      "Heavy Industrial Motor"
    ],
    "compatibleBrands": [
      "John Deere 5310",
      "New Holland 5500",
      "Mahindra Novo"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 869
  },
  {
    "id": "pdb-6311-2rs",
    "partNumber": "6311 2RS",
    "name": "6311 2RS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Rubber Sealed (2RS)",
    "dimensions": {
      "bore": 55,
      "outerDiameter": 120,
      "width": 29
    },
    "price": 1122,
    "priceOnEnquiry": false,
    "wholesalePrice": 987,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 21,
    "image": "/products images/6311 2RS.webp",
    "heavyDuty": false,
    "applications": [
      "Heavy Tractor Axle",
      "Sugarcane Harvester",
      "Industrial Stone Crusher"
    ],
    "compatibleBrands": [
      "John Deere",
      "Sonalika Tiger",
      "Claas Combine"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1122
  },
  {
    "id": "pdb-6379-20",
    "partNumber": "6379/20",
    "name": "6379/20",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 65,
      "outerDiameter": 125,
      "width": 37
    },
    "price": 2995,
    "priceOnEnquiry": false,
    "wholesalePrice": 2636,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 24,
    "image": "/products images/6379-20.webp",
    "heavyDuty": true,
    "applications": [
      "Tata Heavy Commercial Hub",
      "Differential Side Bearing",
      "Leyland Axle"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 2995
  },
  {
    "id": "pdb-683-672",
    "partNumber": "683/672",
    "name": "683/672",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 95.25,
      "outerDiameter": 168.275,
      "width": 41.275
    },
    "price": 2568,
    "priceOnEnquiry": false,
    "wholesalePrice": 2260,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 25,
    "image": "/products images/683-672.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Trailer Hub Axle",
      "York Trailer Hub",
      "Ashok Leyland Multi-Axle"
    ],
    "compatibleBrands": [
      "York Axles",
      "Ashok Leyland 4018",
      "Tata Prima"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 2568
  },
  {
    "id": "pdb-88507-wos",
    "partNumber": "88507-WOS",
    "name": "88507-WOS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 80,
      "width": 23
    },
    "price": 707,
    "priceOnEnquiry": false,
    "wholesalePrice": 622,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 26,
    "image": "/products images/88507-WOS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Front Hub / Rear Axle Special",
      "Agri Cultivator",
      "Thresher"
    ],
    "compatibleBrands": [
      "Mahindra",
      "Swaraj",
      "Sonalika"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 707
  },
  {
    "id": "pdb-88509-wos",
    "partNumber": "88509-WOS",
    "name": "88509-WOS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 45,
      "outerDiameter": 85,
      "width": 23
    },
    "price": 949,
    "priceOnEnquiry": false,
    "wholesalePrice": 835,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 12,
    "image": "/products images/88509-WOS.webp",
    "heavyDuty": false,
    "applications": [
      "Tractor Planetary Axle",
      "Agri Harvester Hub",
      "Heavy Cultivator"
    ],
    "compatibleBrands": [
      "Mahindra Arjun",
      "Swaraj 855",
      "John Deere"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 949
  },
  {
    "id": "pdb-88912-wos",
    "partNumber": "88912 WOS",
    "name": "88912 WOS",
    "category": "tractor",
    "categoryName": "Tractor & Agri",
    "bearingType": "Deep Groove Ball Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 60,
      "outerDiameter": 110,
      "width": 28
    },
    "price": 1536,
    "priceOnEnquiry": false,
    "wholesalePrice": 1352,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 13,
    "image": "/products images/88912 WOS.webp",
    "heavyDuty": false,
    "applications": [
      "Heavy Tractor Rear Axle",
      "Combine Harvester Drum",
      "Heavy PTO"
    ],
    "compatibleBrands": [
      "Mahindra Novo",
      "John Deere",
      "New Holland"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 1536
  },
  {
    "id": "pdb-pd-uj-cross-004",
    "partNumber": "PD UJ CROSS 004",
    "name": "PD UJ CROSS 004",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Needle Roller Bearing",
    "sealType": "Heavy Duty Double Lip",
    "dimensions": {
      "bore": 27,
      "outerDiameter": 82,
      "width": 27
    },
    "price": 545,
    "priceOnEnquiry": false,
    "wholesalePrice": 480,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 16,
    "image": "/products images/PD UJ CROSS 004.webp",
    "heavyDuty": true,
    "applications": [
      "Propeller Shaft Universal Joint",
      "LCV Drive Line",
      "Tata 407 Propeller Cross"
    ],
    "compatibleBrands": [
      "Tata 407",
      "Mahindra Bolero Camper",
      "Force Traveller"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 545
  },
  {
    "id": "pdb-pd-uj-cross-008",
    "partNumber": "PD UJ CROSS 008",
    "name": "PD UJ CROSS 008",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Needle Roller Bearing",
    "sealType": "Heavy Duty Double Lip",
    "dimensions": {
      "bore": 30.2,
      "outerDiameter": 106.3,
      "width": 30.2
    },
    "price": 945,
    "priceOnEnquiry": false,
    "wholesalePrice": 832,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 17,
    "image": "/products images/PD UJ CROSS 008.webp",
    "heavyDuty": true,
    "applications": [
      "Medium & Heavy Truck Propeller Shaft",
      "Tata 1210 / 1613 Drive Shaft",
      "Eicher Pro Cross"
    ],
    "compatibleBrands": [
      "Tata 1210",
      "Tata 1613",
      "Eicher Pro",
      "Ashok Leyland Comet"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 945
  },
  {
    "id": "pdb-pd-uj-cross-008-gl-",
    "partNumber": "PD UJ CROSS 008(GL)",
    "name": "PD UJ CROSS 008(GL)",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Needle Roller Bearing",
    "sealType": "Heavy Duty Double Lip",
    "dimensions": {
      "bore": 30.2,
      "outerDiameter": 106.3,
      "width": 30.2
    },
    "price": 950,
    "priceOnEnquiry": false,
    "wholesalePrice": 836,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 18,
    "image": "/products images/PD UJ CROSS 008(GL).webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Duty Greasable Propeller Shaft Cross",
      "Ashok Leyland 1616 / 2518",
      "Mining Tipper Cross"
    ],
    "compatibleBrands": [
      "Ashok Leyland",
      "Tata Motors Heavy"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 950
  },
  {
    "id": "pdb-pd-uj-cross-015",
    "partNumber": "PD UJ CROSS 015",
    "name": "PD UJ CROSS 015",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Needle Roller Bearing",
    "sealType": "Heavy Duty Double Lip",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 126,
      "width": 35
    },
    "price": 570,
    "priceOnEnquiry": false,
    "wholesalePrice": 502,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 19,
    "image": "/products images/PD UJ CROSS 015.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Haulage Multi-Axle Universal Joint",
      "Tata 2518 / 3118 Propeller Shaft",
      "Prime Mover Driveline"
    ],
    "compatibleBrands": [
      "Tata Motors Heavy",
      "Ashok Leyland 3118",
      "BharatBenz Heavy"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 570
  },
  {
    "id": "pdb-t122-tr",
    "partNumber": "T122-TR",
    "name": "T122-TR",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 28,
      "outerDiameter": 52,
      "width": 16
    },
    "price": 235,
    "priceOnEnquiry": false,
    "wholesalePrice": 207,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 20,
    "image": "/products images/T122-TR.webp",
    "heavyDuty": true,
    "applications": [
      "King Pin Thrust Bearing",
      "Steering Pivot",
      "Commercial Vehicle Front Axle"
    ],
    "compatibleBrands": [
      "Tata Motors",
      "Ashok Leyland",
      "Eicher"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 235
  },
  {
    "id": "pdb-t126-tr",
    "partNumber": "T126-TR",
    "name": "T126-TR",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 30,
      "outerDiameter": 58,
      "width": 17
    },
    "price": 245,
    "priceOnEnquiry": false,
    "wholesalePrice": 216,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 21,
    "image": "/products images/T126-TR.webp",
    "heavyDuty": true,
    "applications": [
      "Heavy Duty King Pin Thrust Bearing",
      "Truck Front Steer Axle",
      "Bus Kingpin Pivot"
    ],
    "compatibleBrands": [
      "Ashok Leyland Viking",
      "Tata 1613 Steer Axle"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 245
  },
  {
    "id": "pdb-t138-tr",
    "partNumber": "T138-TR",
    "name": "T138-TR",
    "category": "lorry",
    "categoryName": "Lorry & HCV",
    "bearingType": "Tapered Roller Bearing",
    "sealType": "Open",
    "dimensions": {
      "bore": 35,
      "outerDiameter": 65,
      "width": 18
    },
    "price": 285,
    "priceOnEnquiry": false,
    "wholesalePrice": 251,
    "minWholesaleQty": 6,
    "inStock": true,
    "stockCount": 100,
    "rating": 5,
    "reviewsCount": 22,
    "image": "/products images/T138-TR.webp",
    "heavyDuty": true,
    "applications": [
      "Multi-Axle Truck King Pin Thrust Bearing",
      "Heavy Steer Axle Knuckle",
      "Tipper Kingpin"
    ],
    "compatibleBrands": [
      "Tata Signa",
      "Ashok Leyland 2518",
      "BharatBenz"
    ],
    "specs": {
      "material": "100% GCr15 High-Carbon Chrome Steel",
      "clearance": "Normal Radial / C3",
      "dynamicLoad": "32.5 kN",
      "staticLoad": "36.0 kN",
      "limitingSpeed": "7,500 RPM",
      "lubrication": "High-Temp EP2 Grease / Gear Oil",
      "weight": "0.22 kg"
    },
    "mrp": 285
  }
];

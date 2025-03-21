export interface SkinMetrics {
  healthScore: number;
  hydrationLevel: number;
  barrier: {
    lipids: number;
    ceramides: number;
    fatty_acids: number;
    tewl?: number; // Transepidermal Water Loss
  };
  composition: {
    water: number;
    lipids: number;
    proteins: number; // Used for deriving collagen density
    minerals: number;
    collagen?: number;
    elastin?: number;
  };
}

export interface User {
  id: string;
  sampleCode: string;
}

export interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}
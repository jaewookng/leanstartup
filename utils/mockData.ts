import { SkinMetrics, User } from '../types';

// Demo code for testing (random 5-letter all caps code)
export const demoUser: User = {
  id: '12345',
  sampleCode: 'QWERT'
};

export const mockSkinData: SkinMetrics = {
  healthScore: 87,
  hydrationLevel: 72,
  barrier: {
    lipids: 65,
    ceramides: 80,
    fatty_acids: 70
  },
  composition: {
    water: 72,
    lipids: 15,
    proteins: 10,
    minerals: 3
  }
};

export const mockRecommendations = [
  "Increase daily water intake to 2.5L",
  "Add a hyaluronic acid serum to your routine",
  "Consider a ceramide-rich moisturizer"
];
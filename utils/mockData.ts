import { SkinMetrics, User } from '../types';
import { UserMode } from './UserModeContext';

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

// Mode-specific descriptions and explanations
interface ModeSpecificContent {
  healthScoreDescription: string;
  hydrationDescription: string;
  barrierDescription: string;
  compositionDescription: string;
  recommendations: string[];
}

export const modeSpecificContent: Record<UserMode, ModeSpecificContent> = {
  consumer: {
    healthScoreDescription: "Your skin health is looking good! This score represents your overall skin condition.",
    hydrationDescription: "Your skin's moisture level shows how well your skin retains water.",
    barrierDescription: "This indicates how well your skin protects itself from the environment.",
    compositionDescription: "A balanced breakdown of your skin's main components.",
    recommendations: [
      "Drink more water daily",
      "Use a hydrating moisturizer",
      "Consider adding a ceramide product to your routine"
    ]
  },
  student: {
    healthScoreDescription: "Your skin health score combines multiple factors including hydration, barrier function, and cellular turnover.",
    hydrationDescription: "Hydration levels indicate stratum corneum water content and are key indicators of skin health.",
    barrierDescription: "Skin barrier function measures the integrity of your skin's protective layer composed of lipids, ceramides, and fatty acids.",
    compositionDescription: "A quantitative analysis of your skin's biomolecular composition showing the relative proportions of key components.",
    recommendations: [
      "Increase daily water intake to 2.5L to improve cellular hydration",
      "Incorporate a hyaluronic acid serum to boost water retention in the epidermis",
      "Add a ceramide-rich moisturizer to strengthen barrier function"
    ]
  },
  scientist: {
    healthScoreDescription: "Composite dermal health index (87/100) derived from corneometry, TEWL measurements, and lipid profiling. Your score falls within the 85th percentile of the reference population.",
    hydrationDescription: "Stratum corneum hydration measured via electrical capacitance showing 72% relative water content. Normal range is 65-80% for your demographic profile.",
    barrierDescription: "Transepidermal water loss and lipid profile analysis indicate moderate barrier function with adequate lipid (65%), ceramide (80%), and fatty acid (70%) composition.",
    compositionDescription: "Quantitative analysis via tape stripping and ATR-FTIR spectroscopy shows: H₂O (72%), lipids (15%), proteins primarily keratin and filaggrin (10%), and trace minerals (3%).",
    recommendations: [
      "Increase daily H₂O consumption to 2.5L to optimize cellular hydration and metabolic processes",
      "Incorporate 1-2% hyaluronic acid serum with molecular weights between 80-1000 kDa to enhance stratum corneum water-binding capacity",
      "Utilize ceramide-dominant (3:1:1 ceramide:cholesterol:fatty acid ratio) emollient to address mild lamellar lipid matrix deficiencies"
    ]
  }
};

export const mockRecommendations = [
  "Increase daily water intake to 2.5L",
  "Add a hyaluronic acid serum to your routine",
  "Consider a ceramide-rich moisturizer"
];
import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { SkinMetrics } from '../../types';
import { useUserMode } from '../../utils/UserModeContext';
import { modeSpecificContent } from '../../utils/mockData';

interface FullReportSectionProps {
  skinData: SkinMetrics;
}

const FullReportSection: React.FC<FullReportSectionProps> = ({ skinData }) => {
  const [showFullReport, setShowFullReport] = useState(false);
  const { mode } = useUserMode();
  const content = modeSpecificContent[mode];

  // Different titles and descriptions based on user mode
  const titles = {
    consumer: "Full Report",
    student: "Advanced Analysis",
    scientist: "Technical Analysis Report"
  };

  const descriptions = {
    consumer: "See your complete skin report with personalized insights",
    student: "View detailed skin analysis with technical measurements",
    scientist: "Access comprehensive biometric data and spectroscopic analysis"
  };

  return (
    <Card className="mt-4">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">{titles[mode]}</h3>
        <p className="text-gray-600 mb-4 text-center">
          {descriptions[mode]}
        </p>
        
        <Button 
          variant="outline" 
          onClick={() => setShowFullReport(!showFullReport)}
        >
          {showFullReport ? `Hide ${titles[mode]}` : `View ${titles[mode]}`}
        </Button>
        
        {showFullReport && (
          <div className="mt-6 w-full">
            <h4 className="text-md font-semibold mb-3 border-b pb-2">
              {mode === 'consumer' ? 'Detailed Metrics' : 
               mode === 'student' ? 'Technical Metrics' : 
               'Biophysical Parameters'}
            </h4>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Water Loss' : 
                   mode === 'student' ? 'Transepidermal Water Loss (TEWL)' : 
                   'TEWL (g/m²/h)'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(skinData.hydrationLevel + 5, 100)}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{Math.min(skinData.hydrationLevel + 5, 100)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {mode === 'consumer' ? 
                    (skinData.hydrationLevel > 70 ? "Great skin barrier!" : "Your skin barrier needs support") : 
                   mode === 'student' ? 
                    (skinData.hydrationLevel > 70 ? "Excellent barrier function" : "Moderate barrier function") : 
                    (skinData.hydrationLevel > 70 ? "TEWL within optimal range (5-8 g/m²/h)" : "TEWL slightly elevated (9-12 g/m²/h)")}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Skin Ceramides' : 
                   mode === 'student' ? 'Ceramide Levels' : 
                   'Ceramide Profile (μg/cm²)'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.ceramides}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.barrier.ceramides}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {mode === 'consumer' ? 
                    (skinData.barrier.ceramides > 75 ? "Good ceramide levels" : "Could use more ceramides") : 
                   mode === 'student' ? 
                    (skinData.barrier.ceramides > 75 ? "Optimal levels" : "Room for improvement") : 
                    (skinData.barrier.ceramides > 75 ? "Ceramide concentration: 30-35 μg/cm²" : "Ceramide concentration: 25-29 μg/cm²")}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Skin Firmness' : 
                   mode === 'student' ? 'Collagen Density' : 
                   'Type I/III Collagen Ratio'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.composition.proteins * 8}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.composition.proteins * 8}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {mode === 'consumer' ? 
                    (skinData.composition.proteins > 9 ? "Good skin firmness" : "Firmness can be improved") : 
                   mode === 'student' ? 
                    (skinData.composition.proteins > 9 ? "Good collagen production" : "Enhanced support recommended") : 
                    (skinData.composition.proteins > 9 ? "Optimal ratio of 3.5:1 (Type I:III)" : "Decreased ratio of 2.8:1 (Type I:III)")}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Skin Elasticity' : 
                   mode === 'student' ? 'Elastin' : 
                   'Elastin Fiber Integrity'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.composition.proteins * 7}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.composition.proteins * 7}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {mode === 'consumer' ? 
                    (skinData.composition.proteins > 9 ? "Good skin bounce" : "Your skin could use more bounce") : 
                   mode === 'student' ? 
                    (skinData.composition.proteins > 9 ? "Good skin elasticity" : "Elasticity support recommended") : 
                    (skinData.composition.proteins > 9 ? "Elastin microfibril density: 78%" : "Elastin microfibril density: 63%")}
                </p>
              </div>
            </div>
            
            <h4 className="text-md font-semibold mb-3 border-b pb-2">
              {mode === 'consumer' ? 'Skin Barrier' : 
               mode === 'student' ? 'Skin Barrier Composition' : 
               'Lipid Matrix Analysis'}
            </h4>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Skin Oils' : 
                   mode === 'student' ? 'Lipids' : 
                   'Epidermal Lipid Content'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.lipids}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {mode === 'scientist' ? `${skinData.barrier.lipids} μg/cm²` : skinData.barrier.lipids}
                  </span>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">
                  {mode === 'consumer' ? 'Healthy Fats' : 
                   mode === 'student' ? 'Fatty Acids' : 
                   'Free Fatty Acid Composition'}
                </h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.fatty_acids}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">
                    {mode === 'scientist' ? `${skinData.barrier.fatty_acids}%` : skinData.barrier.fatty_acids}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h5 className="font-medium text-gray-800 mb-2">
                {mode === 'consumer' ? 'Summary' : 
                 mode === 'student' ? 'Report Summary' : 
                 'Clinical Assessment'}
              </h5>
              <p className="text-sm text-gray-600">
                {mode === 'consumer' ? 
                  `Your skin is in ${skinData.healthScore > 80 ? "great" : "good"} shape with 
                   ${skinData.hydrationLevel > 70 ? "good" : "average"} hydration. 
                   You could benefit from products with ${skinData.barrier.fatty_acids < 75 ? "healthy fats" : "oils"}.` : 
                 mode === 'student' ? 
                  `Your skin shows ${skinData.healthScore > 80 ? "excellent" : "good"} overall health with 
                   ${skinData.hydrationLevel > 70 ? "optimal" : "moderate"} hydration levels. 
                   Your skin barrier function is ${skinData.barrier.ceramides > 75 ? "strong" : "adequate"}, 
                   with room for improvement in ${skinData.barrier.fatty_acids < 75 ? "fatty acid" : "lipid"} content.` : 
                  `Subject exhibits ${skinData.healthScore > 80 ? "above-average" : "normal"} epidermal integrity with 
                   ${skinData.hydrationLevel > 70 ? "clinically optimal" : "moderately reduced"} stratum corneum hydration (${skinData.hydrationLevel} corneometer units). 
                   Barrier function assessment reveals ${skinData.barrier.ceramides > 75 ? "intact" : "partially compromised"} intercellular lamellar bilayers with 
                   ${skinData.barrier.fatty_acids < 75 ? "suboptimal essential fatty acid" : "adequate lipid"} profiles.`}
              </p>
              <div className="mt-3 text-right">
                <Button variant="primary" onClick={() => alert("Downloading full PDF report...")}>
                  {mode === 'consumer' ? 'Get PDF Report' : 
                   mode === 'student' ? 'Download PDF Report' : 
                   'Export Technical Analysis (PDF)'}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default FullReportSection;
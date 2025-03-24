import React, { useState } from 'react';
import Card from '../shared/Card';
import Button from '../shared/Button';
import { SkinMetrics } from '../../types';

interface FullReportSectionProps {
  skinData: SkinMetrics;
}

const FullReportSection: React.FC<FullReportSectionProps> = ({ skinData }) => {
  const [showFullReport, setShowFullReport] = useState(false);

  return (
    <Card className="mt-4">
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-semibold mb-2">Advanced Analysis</h3>
        <p className="text-gray-600 mb-4 text-center">
          View your complete skin analysis with detailed technical measurements
        </p>
        
        <Button 
          variant="outline" 
          onClick={() => setShowFullReport(!showFullReport)}
        >
          {showFullReport ? 'Hide Full Report' : 'View Full Report'}
        </Button>
        
        {showFullReport && (
          <div className="mt-6 w-full">
            <h4 className="text-md font-semibold mb-3 border-b pb-2">Technical Metrics</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">Transepidermal Water Loss (TEWL)</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${Math.min(skinData.hydrationLevel + 5, 100)}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{Math.min(skinData.hydrationLevel + 5, 100)}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {skinData.hydrationLevel > 70 ? "Excellent barrier function" : "Moderate barrier function"}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">Ceramide Levels</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.ceramides}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.barrier.ceramides}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {skinData.barrier.ceramides > 75 ? "Optimal levels" : "Room for improvement"}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">Collagen Density</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.composition.proteins * 8}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.composition.proteins * 8}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {skinData.composition.proteins > 9 ? "Good collagen production" : "Enhanced support recommended"}
                </p>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">Elastin</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.composition.proteins * 7}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.composition.proteins * 7}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {skinData.composition.proteins > 9 ? "Good skin elasticity" : "Elasticity support recommended"}
                </p>
              </div>
            </div>
            
            <h4 className="text-md font-semibold mb-3 border-b pb-2">Skin Barrier Composition</h4>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h5 className="font-medium text-gray-700">Lipids</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.lipids}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.barrier.lipids}</span>
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-700">Fatty Acids</h5>
                <div className="flex justify-between items-center mt-1">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${skinData.barrier.fatty_acids}%` }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">{skinData.barrier.fatty_acids}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <h5 className="font-medium text-gray-800 mb-2">Report Summary</h5>
              <p className="text-sm text-gray-600">
                Your skin shows {skinData.healthScore > 80 ? "excellent" : "good"} overall health with 
                {skinData.hydrationLevel > 70 ? " optimal" : " moderate"} hydration levels. 
                Your skin barrier function is {skinData.barrier.ceramides > 75 ? "strong" : "adequate"}, 
                with room for improvement in {skinData.barrier.fatty_acids < 75 ? "fatty acid" : "lipid"} content.
              </p>
              <div className="mt-3 text-right">
                <Button variant="primary" onClick={() => alert("Downloading full PDF report...")}>
                  Download PDF Report
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
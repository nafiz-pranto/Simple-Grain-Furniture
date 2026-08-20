import React, { useState } from 'react';
import { Dimensions } from '../types';
import { Ruler, Maximize2, Box, Info } from 'lucide-react';

interface DimensionsDiagramProps {
  dimensions: Dimensions;
  productName: string;
  category: string;
}

export const DimensionsDiagram: React.FC<DimensionsDiagramProps> = ({
  dimensions,
  productName,
  category
}) => {
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  const widthDisplay = unit === 'cm' ? `${dimensions.widthCm} cm` : dimensions.widthInches;
  const depthDisplay = unit === 'cm' ? `${dimensions.depthCm} cm` : dimensions.depthInches;
  const heightDisplay = unit === 'cm' ? `${dimensions.heightCm} cm` : dimensions.heightInches;
  const seatHeightDisplay = dimensions.seatHeightCm
    ? unit === 'cm'
      ? `${dimensions.seatHeightCm} cm`
      : `${Math.round(dimensions.seatHeightCm / 2.54)}" `
    : null;

  return (
    <div className="bg-[#F5F2EB] border border-[#E2D9CA] rounded-xs p-6 sm:p-8 space-y-6">
      
      {/* Top Bar with Unit Switcher */}
      <div className="flex items-center justify-between border-b border-[#E2D9CA] pb-4">
        <div className="flex items-center space-x-2">
          <Ruler size={17} className="text-[#A38053]" />
          <h4 className="font-serif text-lg text-[#191816] font-medium">
            Architectural Proportions & Dimensions
          </h4>
        </div>

        {/* Unit Toggle */}
        <div className="flex items-center space-x-1 bg-[#EFEAE1] p-1 rounded-xs border border-[#E2D9CA]">
          <button
            onClick={() => setUnit('cm')}
            className={`px-2.5 py-1 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
              unit === 'cm' ? 'bg-[#191816] text-[#FDFBF7] font-medium' : 'text-[#57524A] hover:text-[#191816]'
            }`}
          >
            Metric (cm)
          </button>
          <button
            onClick={() => setUnit('inches')}
            className={`px-2.5 py-1 text-xs font-mono rounded-xs transition-colors cursor-pointer ${
              unit === 'inches' ? 'bg-[#191816] text-[#FDFBF7] font-medium' : 'text-[#57524A] hover:text-[#191816]'
            }`}
          >
            Imperial (in)
          </button>
        </div>
      </div>

      {/* Interactive Architectural Schematic Illustration */}
      <div className="relative py-8 bg-[#FDFBF7] border border-[#EFEAE1] rounded-xs flex flex-col items-center justify-center min-h-[220px]">
        
        {/* SVG Dimensional Silhouette */}
        <div className="relative w-full max-w-sm px-8 flex items-center justify-center">
          <svg
            viewBox="0 0 320 200"
            className="w-full h-auto text-[#7A746B] stroke-current stroke-[1.2] fill-none"
          >
            {/* Base Isometric Ground Grid Lines */}
            <line x1="40" y1="170" x2="280" y2="170" strokeDasharray="3 3" stroke="#D4BD99" opacity="0.6" />
            
            {/* Outer Architectural Bounding Box */}
            <rect x="70" y="50" width="180" height="110" rx="3" stroke="#191816" strokeWidth="1.5" fill="#F5F2EB" fillOpacity="0.6" />
            
            {/* Subtle internal cross lines indicating 3D depth */}
            <line x1="70" y1="50" x2="100" y2="25" stroke="#9E978D" />
            <line x1="250" y1="50" x2="280" y2="25" stroke="#9E978D" />
            <line x1="250" y1="160" x2="280" y2="135" stroke="#9E978D" />
            <line x1="100" y1="25" x2="280" y2="25" stroke="#9E978D" strokeWidth="1.2" />
            <line x1="280" y1="25" x2="280" y2="135" stroke="#9E978D" strokeWidth="1.2" />

            {/* Width Dimension Callout (Top) */}
            <line x1="70" y1="40" x2="250" y2="40" stroke="#A38053" strokeWidth="1.2" />
            <line x1="70" y1="36" x2="70" y2="44" stroke="#A38053" strokeWidth="1.2" />
            <line x1="250" y1="36" x2="250" y2="44" stroke="#A38053" strokeWidth="1.2" />

            {/* Height Dimension Callout (Left) */}
            <line x1="55" y1="50" x2="55" y2="160" stroke="#A38053" strokeWidth="1.2" />
            <line x1="51" y1="50" x2="59" y2="50" stroke="#A38053" strokeWidth="1.2" />
            <line x1="51" y1="160" x2="59" y2="160" stroke="#A38053" strokeWidth="1.2" />

            {/* Depth Dimension Callout (Right Angled) */}
            <line x1="260" y1="163" x2="288" y2="138" stroke="#A38053" strokeWidth="1.2" />
            <line x1="257" y1="160" x2="263" y2="166" stroke="#A38053" strokeWidth="1.2" />
            <line x1="285" y1="135" x2="291" y2="141" stroke="#A38053" strokeWidth="1.2" />
          </svg>

          {/* Metric labels overlaid */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#191816] text-[#FDFBF7] px-2 py-0.5 rounded text-[10px] font-mono tracking-wider">
            Width: {widthDisplay}
          </div>

          <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#191816] text-[#FDFBF7] px-2 py-0.5 rounded text-[10px] font-mono tracking-wider -rotate-90 origin-center">
            Height: {heightDisplay}
          </div>

          <div className="absolute right-2 bottom-6 bg-[#191816] text-[#FDFBF7] px-2 py-0.5 rounded text-[10px] font-mono tracking-wider">
            Depth: {depthDisplay}
          </div>
        </div>

        <p className="text-[11px] text-[#7A746B] mt-4 font-mono">
          Architectural Schematic — Calibrated for standard residential doorways (80cm+ clearance)
        </p>
      </div>

      {/* Metrics Specification Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-3.5 bg-[#FDFBF7] rounded-xs border border-[#EFEAE1]">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B] block">Total Width</span>
          <span className="text-sm font-medium font-mono text-[#191816] mt-0.5 block">{widthDisplay}</span>
        </div>

        <div className="p-3.5 bg-[#FDFBF7] rounded-xs border border-[#EFEAE1]">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B] block">Total Depth</span>
          <span className="text-sm font-medium font-mono text-[#191816] mt-0.5 block">{depthDisplay}</span>
        </div>

        <div className="p-3.5 bg-[#FDFBF7] rounded-xs border border-[#EFEAE1]">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B] block">Total Height</span>
          <span className="text-sm font-medium font-mono text-[#191816] mt-0.5 block">{heightDisplay}</span>
        </div>

        <div className="p-3.5 bg-[#FDFBF7] rounded-xs border border-[#EFEAE1]">
          <span className="text-[10px] uppercase tracking-widest text-[#7A746B] block">Net Solid Weight</span>
          <span className="text-sm font-medium font-mono text-[#191816] mt-0.5 block">{dimensions.weightKg} kg</span>
        </div>
      </div>

      {seatHeightDisplay && (
        <div className="flex items-center space-x-2 text-xs text-[#57524A] bg-[#EFEAE1] p-3 rounded-xs">
          <Info size={14} className="text-[#A38053] shrink-0" />
          <span>
            Seat Height: <strong className="font-mono text-[#191816]">{seatHeightDisplay}</strong> (calculated with natural cushion compression).
          </span>
        </div>
      )}

    </div>
  );
};

'use client';

import { useState } from 'react';
import { FlaskConical } from 'lucide-react';

const VIAL_SIZES = [2, 5, 10, 15, 20]; // mg
const BAC_VOLUMES = [0.5, 1, 1.5, 2, 3]; // mL

export default function ReconstitutionCalculator() {
  const [vialSize, setVialSize] = useState(5); // mg
  const [bacWater, setBacWater] = useState(2); // mL
  const [desiredDose, setDesiredDose] = useState(250); // mcg

  // Calculations
  const vialMcg = vialSize * 1000;
  const concentrationPerMl = vialMcg / bacWater;
  const drawMl = desiredDose / concentrationPerMl;
  const drawUnits = drawMl * 100;
  const dosesPerVial = Math.floor(vialMcg / desiredDose);

  const isInvalidDose = dosesPerVial < 1;

  return (
    <div
      className="card border border-yellow-400/40 p-6 sm:p-8"
      style={{ background: 'var(--bg-card)' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-yellow-100 flex items-center justify-center shrink-0">
          <FlaskConical size={20} className="text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Reconstitution Calculator</h3>
      </div>
      <p className="text-sm text-gray-700 mb-8 ml-0">
        Enter your vial size and BAC water volume to get exact draw amounts
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        {/* Vial Size */}
        <div>
          <label className="block text-xs text-gray-700 uppercase tracking-wider mb-1">
            Vial Size
          </label>
          <select
            value={vialSize}
            onChange={(e) => setVialSize(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 border focus:outline-none focus:ring-1 focus:ring-yellow-400"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            {VIAL_SIZES.map((size) => (
              <option key={size} value={size}>
                {size}mg
              </option>
            ))}
          </select>
        </div>

        {/* BAC Water */}
        <div>
          <label className="block text-xs text-gray-700 uppercase tracking-wider mb-1">
            BAC Water Volume
          </label>
          <select
            value={bacWater}
            onChange={(e) => setBacWater(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 border focus:outline-none focus:ring-1 focus:ring-yellow-400"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          >
            {BAC_VOLUMES.map((vol) => (
              <option key={vol} value={vol}>
                {vol}mL
              </option>
            ))}
          </select>
        </div>

        {/* Desired Dose */}
        <div>
          <label className="block text-xs text-gray-700 uppercase tracking-wider mb-1">
            Desired Dose (mcg)
          </label>
          <input
            type="number"
            value={desiredDose}
            min={10}
            max={10000}
            onChange={(e) => setDesiredDose(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-900 border focus:outline-none focus:ring-1 focus:ring-yellow-400"
            style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
          />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mb-8" style={{ borderColor: 'var(--border)' }} />

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
        {/* Draw Volume */}
        <div>
          <p className="text-xs text-gray-700 uppercase tracking-wider mb-1">Draw Volume</p>
          <p className="text-2xl font-bold text-gray-900">
            {drawMl.toFixed(3)}
            <span className="text-sm font-normal text-yellow-600 ml-1">mL</span>
          </p>
          <p className="text-xs text-gray-700 mt-1">milliliters to draw</p>
        </div>

        {/* Syringe Units */}
        <div>
          <p className="text-xs text-gray-700 uppercase tracking-wider mb-1">Syringe Units</p>
          <p className="text-2xl font-bold text-gray-900">
            {drawUnits.toFixed(1)}
            <span className="text-sm font-normal text-yellow-600 ml-1">units</span>
          </p>
          <p className="text-xs text-gray-700 mt-1">(on a 100-unit insulin syringe)</p>
        </div>

        {/* Doses Per Vial */}
        <div>
          <p className="text-xs text-gray-700 uppercase tracking-wider mb-1">Doses Per Vial</p>
          {isInvalidDose ? (
            <p className="text-sm font-semibold text-red-400 mt-1">
              &lt; 1 dose — reduce dose or use larger vial
            </p>
          ) : (
            <>
              <p className="text-2xl font-bold text-gray-900">
                {dosesPerVial}
                <span className="text-sm font-normal text-gray-800 ml-1">doses</span>
              </p>
              <p className="text-xs text-gray-700 mt-1">total doses from this vial</p>
            </>
          )}
        </div>
      </div>

      {/* Info box */}
      <div
        className="rounded-lg p-3 text-xs text-gray-700"
        style={{ background: 'var(--bg)' }}
      >
        Each insulin syringe unit = 0.01mL. A 31g &times; &frac12;&quot; syringe is recommended.
      </div>
    </div>
  );
}

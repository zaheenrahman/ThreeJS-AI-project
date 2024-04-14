import React from 'react';
import { useSnapshot } from 'valtio';
import state from '../store';

const DecalSlider = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
        <div className="slider-container glassmorphism p-3 rounded-md">
        <label htmlFor="decal-scale" className="block text-sm font-medium text-gray-700">
            Logo Scale: {snap.logoDecalScale.toFixed(2)}
        </label>
        <input
            id="decal-scale"
            type="range"
            min="0.1"
            max="2"
            step="0.01"
            value={snap.logoDecalScale}
            onChange={(e) => state.logoDecalScale = parseFloat(e.target.value)}
            className="mt-1 block w-full cursor-pointer"
        />
        </div>
    </div>
  );
}

export default DecalSlider;
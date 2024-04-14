import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#FFFFFF',
    logoDecalScale: 0.15, // Default scale for the logo decal
    fullDecalScale: 1, // Default scale for the full decal
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;

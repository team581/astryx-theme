import type { ThemePaletteInput } from '@astryxdesign/core/palette';

/** Seeds of the status colors, kept the same in every theme so they keep their meaning */
export const statusSeeds = {
	success: '#10b981',
	info: '#3b82f6',
	warning: '#f59e0b',
	danger: '#d1242f',
} as const;

/**
 * Seeds of the Team 581 palette: Team 581's maroon, and a gray tinted with it so surfaces stay close to neutral and the
 * maroon carries emphasis
 */
export const team581Seeds = {
	accent: '#591616',
	neutral: '#6f6564',
	...statusSeeds,
	recipe: 'astryx-oklch-v2',
} as const satisfies ThemePaletteInput;

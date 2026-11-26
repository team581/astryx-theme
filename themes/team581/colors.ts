import { type ThemePalette, type ThemePaletteInput, themePalette } from '@astryxdesign/core/palette';

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

/**
 * Dark mode's neutrals from Material 3's tonal spot scheme (2025 spec) for Team 581's maroon, darker and warmer than
 * Astryx's. The page sits on MD3's surface, the surfaces on it go up MD3's surface container roles, and text and strong
 * borders are MD3's on surface, on surface variant, and outline variant.
 */
const darkNeutrals: Record<string, string> = {
	// surface
	'--color-background-body': '#130c0c',
	'--color-background-muted': '#130c0c',
	// surfaceContainerLow
	'--color-background-card': '#1a1110',
	// surfaceContainer
	'--color-background-surface': '#221716',
	// surfaceContainerHigh
	'--color-background-popover': '#281d1c',
	// onSurface
	'--color-text-primary': '#f9e0de',
	'--color-icon-primary': '#f9e0de',
	// onSurfaceVariant
	'--color-text-secondary': '#bca6a4',
	'--color-icon-secondary': '#bca6a4',
	// outlineVariant
	'--color-border-emphasized': '#544443',
	'--color-skeleton': '#544443',
};

const seedPalette = themePalette(team581Seeds);

/** The Team 581 palette: Astryx's palette from the seeds, with Material 3's neutrals in dark mode */
export const team581Palette: ThemePalette = {
	...seedPalette,
	tokens: {
		...seedPalette.tokens,
		...Object.fromEntries(
			Object.entries(darkNeutrals).map(([token, dark]) => [token, [seedPalette.tokens[token]![0], dark] as const]),
		),
	},
};

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
 * Astryx's. Its neutral and neutral variant palettes are chroma 3 and 5 instead of 5 and 8.5, so surfaces stay close to
 * gray and the maroon carries emphasis. The page sits on MD3's surface, the surfaces on it go up MD3's surface container roles, and text and strong
 * borders are MD3's on surface, on surface variant, and outline variant.
 */
const darkNeutrals: Record<string, string> = {
	// surface
	'--color-background-body': '#110d0d',
	'--color-background-muted': '#110d0d',
	// surfaceContainerLow
	'--color-background-card': '#181212',
	// surfaceContainer
	'--color-background-surface': '#1f1818',
	// surfaceContainerHigh
	'--color-background-popover': '#251e1d',
	// onSurface
	'--color-text-primary': '#f2e2e0',
	'--color-icon-primary': '#f2e2e0',
	// onSurfaceVariant
	'--color-text-secondary': '#b6a8a7',
	'--color-icon-secondary': '#b6a8a7',
	// outlineVariant
	'--color-border-emphasized': '#504645',
	'--color-skeleton': '#504645',
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

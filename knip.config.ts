import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	entry: [
		// Theme sources, the sidecar modules built beside them, and the font stylesheet apps import
		'themes/*/*.ts',
		'themes/*/*.fonts.css',
		// Astryx integration manifest and the docs it loads
		'astryx.integration.mjs',
		'**/*.doc.mjs',
	],
	project: ['themes/**/*.{ts,css}', '!**/*.d.ts', 'docs/**/*.mjs', '*.ts'],
	compilers: {
		css: (text: string) =>
			[...text.matchAll(/@import\s+['"]([^'"]+)['"]/g)]
				.map(([, specifier]) => `import ${JSON.stringify(specifier)};`)
				.join('\n'),
	},
};

export default config;

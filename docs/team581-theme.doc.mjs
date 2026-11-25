/** @type {import('@astryxdesign/cli/authoring').ReferenceDoc} */
export default {
	type: 'generic',
	name: 'team581-theme',
	extends: 'theme',
	title: 'Team 581 theme',
	description: 'Use the Team 581 theme from @team581/astryx-theme.',
	sections: [
		{
			id: 'use-the-team581-theme',
			title: 'Use the Team 581 theme',
			content: [
				{
					type: 'prose',
					text: 'Install the package, add the theme, and apply it from the generated app theme module. `theme add` also imports its font stylesheet, which loads IBM Plex Sans, Source Sans 3, and IBM Plex Mono.',
				},
				{
					type: 'code',
					lang: 'bash',
					code: '{@pm install @team581/astryx-theme}\n{@command theme add team581 --package @team581/astryx-theme}',
				},
				{
					type: 'prose',
					text: "To change part of it, extend the theme instead of copying it. `@team581/astryx-theme/colors` exports the palette's seed colors, for an app that generates its own palettes, such as color presets.",
				},
				{
					type: 'code',
					lang: 'ts',
					code: "import { defineTheme } from '@astryxdesign/core/theme';\nimport { team581Theme } from '@team581/astryx-theme/themes/team581';\n\nexport const appTheme = defineTheme({\n\tname: 'app',\n\textends: team581Theme,\n\ttokens: { '--size-element-sm': '24px' },\n});",
				},
			],
		},
	],
};

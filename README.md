# @team581/astryx-theme

Team 581's [Astryx](https://astryx.design) theme and UI design guidelines.

```sh
pnpm add @team581/astryx-theme lucide-react
pnpm exec astryx theme add team581 --package @team581/astryx-theme
```

Read how to apply or extend the theme with `pnpm exec astryx docs theme`. The design guidelines ship as the `team581-design` agent skill, which pnpm links into your agent's skills folder once you run `pnpm approve`.

`@team581/astryx-theme/colors` exports the palette's seed colors for apps that generate their own palettes.

## Development

Edit the theme in `themes/team581/team581Theme.ts` and the guidelines in `skills/team581-design/SKILL.md`, then run `pnpm build` and `pnpm check`.

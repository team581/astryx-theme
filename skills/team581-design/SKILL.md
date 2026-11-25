---
name: team581-design
description: Team 581's UI design rules for apps built with Astryx and the Team 581 theme.
---

# Team 581 design guide

Team 581 apps follow the [Astryx](https://astryx.design) design guidelines (`pnpm exec astryx docs principles`).
This guide lists the rules Team 581 adds to them, and an app's own design guide can add more.
If a specific feature/component deviates from typical Astryx patterns, consider documenting that in the relevant code rather than cluttering a design guide.

## Components

- Build context menus with Astryx's menus instead of native menus
  - macOS menu bar is an exception since it's in addition to the in-app menus
  - Use a `…` button to expose the same commands as right-clicking
- Put mutually exclusive choices in a submenu of radio items (ex. **Show as**) instead of cluttering top-level menus
- Reserve destructive styling for actions users can't undo
- In dense pane UI, show a row's controls while it's hovered or focused, and always on devices without hover.
- If a control is disabled, explain why with a tooltip rather than hiding the control or adding additional text around the control.
  - Exceptions can be made when a tooltip isn't able to effectively communicate

### Keyboard shortcuts

- The keyboard shortcuts dialog lists only app-wide shortcuts
  - Shortcuts for a specific feature/component should be shown visually on the relevant controls

### Icons

- Use `lucide-react` for UI icons and `@ridemountainpig/svgl-react` for product logos
- Custom icons can be used when Lucide doesn't have something suitable
  - Try to keep them consistent with the Lucide style

## Layout and styling

- Import `.stylex.ts` files by a relative path, since the StyleX compiler doesn't resolve `@/`

## Color

- Use Astryx semantic color tokens
- Use a token in between two colors instead of introducing arbitrary opacity percentages to colors
  - Use opacity only for state values: 8% hover, 10% focus and pressed, 16% dragged, 38% disabled content, 12% disabled containers, and 32% scrims
- Make new colors from Astryx's tokens, data colors, or ramps instead of picking hex values, so they follow color modes and high contrast

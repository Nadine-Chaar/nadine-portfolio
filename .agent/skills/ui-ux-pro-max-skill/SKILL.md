---
name: ui-ux-pro-max
description: AI-powered design intelligence toolkit for UI styles, color palettes, typography, and UX guidelines.
---
# UI/UX Pro Max Toolkit

AI-powered design intelligence toolkit providing searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines.

## Prerequisites
No external dependencies. Uses Python 3.

## How to Use This Skill
You can query the design system by running the python script:

```bash
python3 .agent/skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "<query>" --design-system
```

Domain search examples:
```bash
python3 .agent/skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "minimalism" --domain style
python3 .agent/skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "saas" --domain color
python3 .agent/skills/ui-ux-pro-max-skill/src/ui-ux-pro-max/scripts/search.py "navigation" --domain ux
```

## Available Domains
- `product`: Product type recommendations
- `style`: UI styles, colors, effects
- `typography`: Font pairings, Google Fonts
- `color`: Color palettes by product type
- `landing`: Page structure, CTA strategies
- `chart`: Chart types, library recommendations
- `ux`: Best practices, anti-patterns
- `react`: React/Next.js performance
- `web`: App interface guidelines
- `prompt`: AI prompts, CSS keywords

---
name: Cyan-Vapor Portfolio
colors:
  surface: '#121414'
  surface-dim: '#121414'
  surface-bright: '#37393a'
  surface-container-lowest: '#0c0f0f'
  surface-container-low: '#1a1c1c'
  surface-container: '#1e2020'
  surface-container-high: '#282a2b'
  surface-container-highest: '#333535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#b9cac8'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#2f3131'
  outline: '#839492'
  outline-variant: '#3a4a48'
  surface-tint: '#00ddd6'
  primary: '#ffffff'
  on-primary: '#003735'
  primary-container: '#00fcf4'
  on-primary-container: '#00716d'
  inverse-primary: '#006a66'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#313030'
  tertiary-container: '#e5e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#00fcf4'
  primary-fixed-dim: '#00ddd6'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504d'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c9c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474646'
  background: '#121414'
  on-background: '#e2e2e2'
  surface-variant: '#333535'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.5rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  section-padding: 80px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is engineered to project an image of technical sophistication, precision, and high-end digital craftsmanship. Targeted at tech-forward recruiters and fellow developers, it aims to evoke a sense of immersion within a futuristic terminal or a premium SaaS dashboard.

The aesthetic is a refined hybrid of **Glassmorphism** and **Cyberpunk-Minimalism**. It leverages translucent layers to create a sense of digital depth, while the primary accent color provides a sharp, energetic contrast against the charcoal abyss. The interface feels weightless yet structurally sound, utilizing light as the primary tool for hierarchy and interaction.

## Colors

The palette is anchored in deep blacks and charcoal to ensure maximum contrast for the glass effects. 

- **Primary (#00fff7):** Used for critical actions, active states, and "cyber-glow" accents.
- **Backgrounds:** `#0a0a0a` serves as the base canvas, with `#121212` used for slightly elevated sections.
- **Glass Effects:** Surfaces are built using low-opacity white fills combined with heavy background blurs (20px-40px). 
- **Accents:** Neon glows are applied sparingly to icons and active indicators to guide the eye without overwhelming the user.

## Typography

This design system uses a dual-font approach to balance personality and utility. **Plus Jakarta Sans** is utilized for headings to provide a modern, slightly soft edge that contrasts with the sharp tech aesthetic. **Inter** is the workhorse for body copy and UI elements, ensuring maximum readability within translucent containers.

Headlines should occasionally use "text-glow" effects (a subtle 0.5px blur of the primary color) when used in hero sections. Labels and small metadata should always be in uppercase with increased letter spacing to mimic technical schematics.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop to maintain the integrity of glass layers, transitioning to a fluid model for mobile. A 12-column grid is standard, but content is often centered in a "constrained-width" container to create focus.

Spacing is generous to prevent the glass layers from feeling cluttered. Large section padding (80px+) ensures that the background blurs have enough "breathing room" to be visible around the edges of content blocks. Elements within cards use a tight 8px base rhythm.

## Elevation & Depth

Elevation is achieved through **transparency and blur** rather than traditional drop shadows. 

- **Level 1 (Base):** Background color `#0a0a0a`.
- **Level 2 (Cards):** Fill `rgba(255, 255, 255, 0.03)`, Backdrop Blur `20px`, Border `1px solid rgba(255, 255, 255, 0.08)`.
- **Level 3 (Modals/Popovers):** Fill `rgba(255, 255, 255, 0.07)`, Backdrop Blur `40px`, Border `1px solid rgba(255, 255, 255, 0.15)`.

To simulate depth, higher elevation levels feature slightly brighter borders and more intense blurs. A soft, primary-tinted shadow (`rgba(0, 255, 247, 0.1)`) is used only for the highest-level interactive elements to make them "pop" off the screen.

## Shapes

The design system utilizes **Rounded** shapes (0.5rem base) to soften the cyberpunk edge, making the SaaS environment feel approachable. 

- **Cards & Sections:** Use `rounded-xl` (1.5rem) to emphasize the "contained" glass look.
- **Buttons & Inputs:** Use `rounded-lg` (1rem) for a modern, tactile feel.
- **Icon Enclosures:** Small circles or `rounded-md` squares are used for secondary actions.

## Components

- **Buttons:** 
    - *Primary:* Solid `#00fff7` with black text. On hover, apply a primary-colored outer glow.
    - *Secondary:* Glass background with a white border and primary-colored text.
- **Glass Cards:** The signature component. Feature a subtle top-to-bottom gradient in the border to simulate a light source from above.
- **Inputs:** Dark backgrounds (`#050505`) with a 1px glass border. The border transitions to the primary color on focus, accompanied by a subtle inner glow.
- **Chips/Badges:** Small, semi-transparent capsules with high-contrast text. Use these for tech stack tags.
- **Glow-Indicators:** Small, circular dots of `#00fff7` used next to active status text (e.g., "Available for work") with a pulse animation.
- **Scrollbars:** Ultra-thin, primary-colored tracks with no background to maintain the glass transparency.
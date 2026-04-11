# Design System Strategy: The Architectural Narrative

## 1. Overview & Creative North Star
**The Creative North Star: "The Master’s Atelier"**

This design system moves away from the "template-driven" look of standard construction firms and instead adopts the persona of a high-end architectural firm. The goal is to evoke the feeling of walking into a quiet, sun-drenched studio where every material sample is chosen with intention.

To achieve this, we break the "standard grid" through **Editorial Asymmetry**. We favor large, intentional whitespace and overlapping elements—where a high-resolution image of a renovation might bleed off the edge of a container, or a serif subline might sit partially over a charcoal surface. This creates a sense of "custom craftsmanship" rather than "automated assembly."

---

## 2. Colors: Tonal Depth & Materiality
Our palette is rooted in the materials of the trade: charcoal slate, warm oak, and metallic champagne.

### Color Roles
- **Primary (`#1a2025`)**: Representing the "Slate." Use this for core structural elements and high-contrast typography to ground the experience.
- **Secondary (`#735a3a`)**: Representing "Warm Wood/Champagne." This is our accent of craftsmanship. Use it sparingly for CTAs, focus states, and key highlights.
- **Tertiary (`#271e09`)**: The "Shadow Grain." Used for deep-toned sections that require a sophisticated, moody backdrop.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define a new content area, use a background shift. For example, transition from a `surface` (`#f9f9f7`) section to a `surface-container-low` (`#f4f4f2`) section. This creates a soft, architectural transition that mimics how light hits different planes of a wall.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of material.
- **Base Layer:** `surface`
- **Raised Elements:** Place `surface-container-lowest` (pure white) cards on `surface-container` backgrounds to create a "lifted paper" effect.
- **Recessed Elements:** Use `surface-dim` for utility areas like footers or sidebars to ground them.

### Signature Textures: The "Glass & Gradient" Rule
For high-impact CTAs or Hero backgrounds, do not use flat colors. Use a **linear gradient** transitioning from `primary` (`#1a2025`) to `primary-container` (`#2f353b`) at a 135-degree angle. For floating navigation or modal overlays, use **Glassmorphism**:
- **Background:** `surface` at 80% opacity.
- **Backdrop-blur:** 12px to 20px.
- This ensures the rich imagery of our renovations is always subtly visible, maintaining "transparency" in our process.

---

## 3. Typography: The Editorial Balance
We pair the modern precision of a sans-serif with the timeless heritage of a serif.

- **Display & Headlines (Manrope):** Use `display-lg` and `headline-md` to establish authority. The sans-serif choice represents the modern technology and precision we bring to renovation.
- **Body & Titles (Noto Serif):** All long-form content and sub-titles use `notoSerif`. This evokes the feeling of a high-end interior design magazine. It slows the reader down, encouraging them to appreciate the "details" of the craftsmanship.
- **Labels (Manrope):** Functional micro-copy (buttons, tags) returns to the sans-serif for maximum legibility at small sizes.

---

## 4. Elevation & Depth: Tonal Layering
We reject the heavy drop-shadows of the early web. Our depth is "Ambient."

- **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card sitting on a `surface-container-high` section creates a natural hierarchy without a single pixel of shadow.
- **Ambient Shadows:** For floating elements (e.g., a "Contact Us" FAB), use a shadow with a 32px blur and 4% opacity, using the `on-surface` color (`#1a1c1b`) as the tint. It should feel like a soft glow, not a dark stain.
- **The "Ghost Border":** If a boundary is required for accessibility, use the `outline-variant` token at **15% opacity**. It should be felt more than seen.

---

## 5. Components: Solid & Reliable

### Buttons
- **Primary:** Gradient fill (`primary` to `primary-container`), no border, `md` (0.375rem) roundedness. Label is `on-primary`.
- **Secondary:** `surface-container-lowest` fill with a `secondary` (`#735a3a`) text. Use for less critical actions.
- **Tertiary:** No fill, `secondary` text with an underline that appears on hover.

### Input Fields
- **Style:** Underline-only or subtle `surface-container-highest` fill.
- **State:** On focus, the label slides up and the underline transitions to `secondary` (Champagne Gold).
- **Validation:** Use `error` (`#ba1a1a`) text, but keep the icon minimal to avoid breaking the high-end aesthetic.

### Cards & Lists
- **Rule:** **Strictly no dividers.**
- **Implementation:** Use 48px to 64px of vertical whitespace to separate list items. For cards, use a subtle background shift (e.g., `surface-container-low`) and a `lg` (0.5rem) corner radius.
- **Portfolio Cards:** Use "Bleed Layouts" where the image fills the top and sides of the card entirely, with the `title-md` (Noto Serif) text nested in a generous margin at the bottom.

### Specialized Component: The "Process Timeline"
- Instead of a standard line-and-dot timeline, use a series of **Overlapping Surface Containers**. Each phase of the renovation is a `surface-container-lowest` block that slightly overlaps the one before it, symbolizing the seamless integration of our design and build phases.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use generous whitespace (32px, 64px, 128px) to convey a "luxury" feel.
- **Do** use the `secondary` gold color only for "Moments of Delight"—CTAs, active states, or icons.
- **Do** use high-resolution photography as a structural element, not just a decoration.

### Don’t:
- **Don't** use 1px solid black or grey borders. They feel cheap and "off-the-shelf."
- **Don't** use sharp 0px corners. Use the `DEFAULT` (0.25rem) or `md` (0.375rem) to make the brand feel "solid but approachable."
- **Don't** crowd the layout. If you feel like you need a divider line, you probably need more whitespace instead.
- **Don't** use standard blue for links. Use `secondary` or `on-surface` with an elegant underline.
# Coffee Shop Website (v2)

A vibrant pink-themed, purely aesthetic React coffee shop website — no cart or ordering. Includes a menu explorer and an "Our Story" page with Instagram & TikTok links.

## Project Structure

```
src/
├── App.jsx                   # Root component
├── App.css                   # Global styles & CSS variables (pink palette)
├── data/
│   └── menu.js               # All coffee items & categories
└── components/
    ├── Header.jsx / .css     # Sticky nav
    ├── Hero.jsx / .css       # Landing hero with animated pink blobs
    ├── Menu.jsx / .css       # Filterable menu grid
    ├── MenuCard.jsx / .css   # Display-only coffee card
    ├── OurStory.jsx / .css   # Story page with social links
    └── Footer.jsx / .css     # Footer with social links
```

## Setup

1. Copy the `src/` folder contents into your existing React project.
2. Replace `App.jsx` and `App.css`, then add the `components/` and `data/` folders.
3. Run your dev server:
   ```bash
   npm start        # create-react-app
   npm run dev      # Vite
   ```

## Customizing

### Menu items
Edit `src/data/menu.js`. Each item:
```js
{
  id: 1,
  category: "Espresso Classics",
  name: "Single Origin Espresso",
  description: "...",
  price: 3.50,
  tags: ["Bold", "Fruity"],
  emoji: "☕",
}
```

### Social links
In `src/components/OurStory.jsx`, update the two constants at the top:
```js
const INSTAGRAM_URL = "https://www.instagram.com/YOUR_HANDLE";
const TIKTOK_URL    = "https://www.tiktok.com/@YOUR_HANDLE";
```
The same URLs are also in `Footer.jsx`.

### Story text
Edit the `<p>` paragraphs inside `OurStory.jsx` to reflect the real origin story.

## Changes from v1
- ✅ Shopping cart fully removed (no state, no drawer, no buttons)
- ✅ Pink vibrant color palette throughout
- ✅ New "Our Story" section with editorial layout
- ✅ Instagram & TikTok social buttons
- ✅ New Footer component

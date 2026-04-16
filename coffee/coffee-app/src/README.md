Coffee Shop Website
A warm, beautifully designed React coffee shop frontend with a filterable menu and add/remove cart functionality.
Project Structure
```
src/
├── App.jsx              # Root component, cart state lives here
├── App.css              # Global styles & CSS variables
├── data/
│   └── menu.js          # All coffee items & categories
└── components/
    ├── Header.jsx / .css    # Sticky nav with cart button + badge
    ├── Hero.jsx / .css      # Landing hero section
    ├── Menu.jsx / .css      # Filterable menu grid
    ├── MenuCard.jsx / .css  # Individual coffee card
    └── Cart.jsx / .css      # Slide-over cart drawer
```
Setup

Copy the `src/` folder into your existing React project (created with `create-react-app` or Vite).
Install dependencies — this project uses only React (already installed) and Google Fonts (loaded via CSS `@import`). No extra packages needed.
Replace your `src/App.jsx` and `src/App.css` with the ones provided, then add the `components/` and `data/` folders.
Run your dev server:
```bash
   npm start        # create-react-app
   # or
   npm run dev      # Vite
   ```
Customizing the Menu

Edit `src/data/menu.js` to add, remove, or change coffee items. Each item has:
```js
{
  id: 1,                        // unique number
  category: "Espresso Classics", // used for filter tabs
  name: "Single Origin Espresso",
  description: "...",
  price: 3.50,
  tags: ["Bold", "Fruity"],     // small labels shown on card
  emoji: "☕",                   // displayed as the card's visual
}
```
Features

☕ 12 coffee items across 4 categories

🔍 Category filter tabs (All / Espresso Classics / Pour-Overs / Cold & Iced / Specialty)

🛒 Slide-over cart drawer with quantity controls

💰 Subtotal, tax (9.5%), and total calculation

📱 Responsive layout (mobile-friendly)

✨ Smooth animations and hover effects
# Lumière — Premium Fashion & Jewellery Store

A responsive React + Tailwind CSS storefront concept based on the supplied visual reference.

## Run locally
1. Install Node.js 18+.
2. Open this folder in VS Code.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown by Vite.

## Build
Run `npm run build`, then deploy the generated `dist/` folder to static hosting.

## Pages
- `/` Home (also visible in the main navbar)
- `/shop` Shop All
- `/new-in` New In
- `/jewellery` Jewellery
- `/clothing` Clothing
- `/collections` Collections
- `/product/:id` Product details
- `/cart` Shopping bag & checkout
- `/our-story` Our Story
- `/account` My Account
- `/contact` Contact & Customer Care
- `/track-order`, `/faq`, `/shipping`, `/returns`, `/privacy`, `/terms` supporting customer-care pages

## Design system
The palette is defined in `tailwind.config.js` and `src/index.css`:
- Champagne Gold `#C6A56B`
- Warm Ivory `#F8F4ED`
- Deep Espresso `#211711`
- Obsidian Black `#101010`
- Soft Sand Beige `#E6D8C5`
- Antique Gold `#A8874F`
- Pure White `#FFFFFF`

## SEO
Each route uses `react-helmet-async` through `src/components/SEO.jsx` for title, description, canonical URL, and Open Graph basics. Replace `https://example.com` in SEO and sitemap files with your final domain before launch. A React SPA can render SEO metadata client-side; for stronger crawler coverage, consider prerendering or server-side rendering before a production SEO launch.

## Commerce integration notes
This starter provides a functional front-end cart, wishlist, product filtering/sorting, collection edit product grids, product image zoom, PIN-format check, discount-code demo field, form validation, account sign-in/create-account demo states, and a checkout demo state. It does **not** process real payments or place real orders. Connect a secure backend and a payment provider such as Razorpay/Cashfree before accepting orders. Do not store payment card data in this frontend.


Collection routes are separate from Shop All: `/collections/everyday-edit`, `/collections/statement-edit`, `/collections/effortless-edit`, `/collections/evening-edit`, and `/collections/new-in`. Each collection page includes curated products with Add to Bag and Buy Now demo actions. Navigation changes reset scroll to the top.


### Dedicated collection routes
- Jewellery: `/collections/jewellery-everyday-edit`, `/collections/jewellery-statement-edit`, `/collections/jewellery-evening-edit`, `/collections/jewellery-minimal-edit`
- Clothing: `/collections/clothing-essential-edit`, `/collections/clothing-workwear-edit`, `/collections/clothing-everyday-edit`, `/collections/clothing-evening-edit`

The Collections landing page groups jewellery and clothing edits separately. Each collection detail page displays category-specific products with Add to Bag and Buy Now demo actions.

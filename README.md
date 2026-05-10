# ZenEdify — Next.js (SSR)

Migrated from Vite + React Router v6 to **Next.js 14 App Router** with full Server-Side Rendering.

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

---

## Folder Structure

```
ZenEdify-nextjs/
├── app/                        # App Router — all routes live here
│   ├── layout.js               # Root layout (Navbar + Footer wrap)
│   ├── page.js                 # / — Home
│   ├── globals.css             # Global styles (identical to original index.css)
│   ├── not-found.js            # 404 page
│   ├── about/page.js
│   ├── contact/page.js         # 'use client' — has form state
│   ├── faqs/
│   │   ├── page.js             # Server page
│   │   └── FAQItem.js          # 'use client' — accordion toggle
│   ├── samples/page.js
│   ├── portfolio/page.js
│   ├── mechanical-engineering/page.js
│   ├── electrical-engineering/page.js
│   ├── chemical-engineering/page.js
│   └── computer-science/page.js
│
├── components/
│   ├── Navbar.js               # 'use client' — dropdown & mobile menu
│   ├── Footer.js               # 'use client' — hover state
│   ├── SectionHeader.js        # Server component
│   ├── ServiceCard.js          # Server component
│   ├── TestimonialCard.js      # Server component
│   └── AnimatedCounter.js      # 'use client' — useEffect counter
│
├── data/
│   └── index.js                # All static data (services, faqs, etc.)
│
├── public/
│   └── assets/
│       └── PersonTeaching.png  # Static image
│
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.json
└── package.json
```

---

## Key Migration Changes

| Original (Vite + React Router) | Next.js (App Router) |
|---|---|
| `BrowserRouter` + `<Routes>` | File-system routing in `app/` |
| `<Route path="..." element={...}>` | Each `page.js` file = a route |
| `import { Link } from 'react-router-dom'` | `import Link from 'next/link'` |
| `useNavigate` / `NavLink` | `useRouter` / `usePathname` |
| `<img src="...">` | `<Image>` from `next/image` |
| `src/index.css` → `main.jsx` | `app/globals.css` → `app/layout.js` |
| All components are client-side | Server components by default; `'use client'` only where needed |
| No SSR — JS bundle → browser renders | Pages rendered on the server, HTML sent to browser |
| Vite `vite.config.js` | `next.config.js` |
| `@tailwindcss/vite` plugin | Standard `tailwindcss` + `postcss` |

### Server vs Client components

- **Server (default):** `SectionHeader`, `ServiceCard`, `TestimonialCard`, all page files except `Contact`.
- **Client (`'use client'`):** `Navbar`, `Footer`, `AnimatedCounter`, `FAQItem`, `Contact` page.

### SEO improvements (SSR benefit)

Each page exports a `metadata` object for `<title>` and `<meta description>` tags, generated server-side so search engines see them immediately.

---

## Deployment

Works with any Node.js host (Vercel, Railway, Render, VPS):

```bash
npm run build
npm run start        # or: NODE_ENV=production node .next/standalone/server.js
```

For static export (no SSR, optional):
```js
// next.config.js
const nextConfig = { output: 'export' };
```

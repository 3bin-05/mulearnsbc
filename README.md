# MuLearn SBC — Student Business Club Website

Official website for the **MuLearn Student Business Club (SBC)** chapter. Built with React + Vite, powered by Firebase Firestore for real-time event management.

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 18](https://react.dev) + [Vite 8](https://vite.dev) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev) |
| Backend / DB | [Firebase Firestore](https://firebase.google.com/docs/firestore) |
| Deployment | [Vercel](https://vercel.com) |

---

## ✨ Features

- **Real-time Events** — Firestore `onSnapshot` auto-classifies events into *Running*, *Coming Soon*, and *Past* based on start/end dates
- **Dynamic Event Cards** — new events added to Firestore appear instantly without a page reload
- **Execom Team Profiles** — individual profile pages at `/username`
- **Responsive Design** — mobile-first, works across all screen sizes
- **Smooth Animations** — Framer Motion scroll-triggered reveals and micro-interactions

---

## 🛠️ Local Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-org/mulearnsbc.git
cd mulearnsbc
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```

Fill in your Firebase project credentials in `.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> ⚠️ **Never commit `.env`** — it is already in `.gitignore`

### 4. Run the dev server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🔥 Firestore — Events Collection

Events live in the `/events` Firestore collection. The site automatically classifies each document:

| Condition | Displayed as |
|-----------|-------------|
| `endDate` < today | **Past Events** |
| `startDate` > today | **Coming Soon** |
| `startDate` ≤ today ≤ `endDate` | **Running** |

### Event Document Schema

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | **Required** — event name |
| `description` | string | Full description |
| `shortDescription` | string | One-liner shown on Coming Soon cards |
| `startDate` | string | ISO datetime e.g. `"2025-05-08T19:00"` |
| `endDate` | string | ISO datetime e.g. `"2025-05-08T21:00"` |
| `cardImage` | string | Image URL for the card background |
| `wideImage` | string | Wide/banner image URL (fallback) |
| `venue` | string | Location name e.g. `"SBC Lab 1"` |
| `mode` | string | `"online"` or `"offline"` |
| `category` | string | Icon hint: `code`, `zap`, `users`, `sparkles`, `calendar` |
| `registrationLink` | string | External registration URL |
| `speaker` | string | Speaker name |
| `certificateAvailable` | boolean | Whether certificates are given |
| `maxParticipants` | number | Participant cap |
| `registrationOpenDate` | string | When registration opens |
| `registrationCloseDate` | string | When registration closes |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, Section wrapper
│   ├── sections/        # Page sections (Hero, About, Events, Impact…)
│   └── reactbits/       # Reusable animation primitives
├── hooks/
│   └── useEvents.js     # Real-time Firestore events hook
├── firebase.js          # Firebase app init (reads from .env)
└── App.jsx              # Router — handles /execom and /username paths
```

---

## 🏗️ Build & Deploy

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

The site is deployed on **Vercel** — push to `main` triggers an automatic deployment. Make sure your `VITE_FIREBASE_*` environment variables are set in the Vercel project settings.

---

## 🔒 Security

- All Firebase credentials are loaded from environment variables (`VITE_` prefix for Vite)
- `.env` is in `.gitignore` — never committed
- Firestore rules enforce public read, schema-validated writes

---

## 📄 License

MIT — MuLearn Student Business Club

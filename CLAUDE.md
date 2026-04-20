# CLAUDE.md — Il Tuo Immobiliare (ITI 2.0)

Sito web per agenzia immobiliare a Bergamo (zero provvigioni per chi vende). React SPA deployata su Cloudflare Workers.

## Comandi essenziali

```bash
npm run dev        # dev server locale (Vite)
npm run build      # build produzione
npm run lint       # ESLint
npm run preview    # build + wrangler dev (test Cloudflare locale)
npm run deploy     # build + wrangler deploy (deploy su Cloudflare)
```

## Stack

- **React 19** + **TypeScript** + **Vite 6**
- **Routing**: React Router v6 — tutte le route sono in `src/App.tsx` (NON altrove)
- **UI**: shadcn/ui + Tailwind CSS + Radix UI (tutto già installato, non reinstallare)
- **Server state**: TanStack Query v5
- **Animazioni**: framer-motion
- **Forms**: react-hook-form + zod + CustomInput component
- **Backend**: Supabase (client in `src/lib/supabaseClient.ts`)
- **Deploy**: Cloudflare Workers (`wrangler.jsonc` — modalità SPA)
- **SEO**: react-helmet-async in ogni pagina + structured data JSON-LD

## Struttura

```
src/
  App.tsx          ← routing e providers (QueryClient, TooltipProvider, ecc.)
  pages/           ← pagine (lazy-loaded in App.tsx)
  components/      ← componenti riusabili
    ui/            ← shadcn/ui — NON modificare questi file, crea wrapper se necessario
  lib/
    supabaseClient.ts
  data/
    properties.ts  ← dati statici degli immobili
  hooks/           ← custom hooks
```

## Regole critiche

**Route**: aggiungi SEMPRE le nuove route in `src/App.tsx` con lazy import. Senza questo l'utente non vedrà mai la pagina.

**shadcn/ui**: NON modificare i file in `src/components/ui/`. Se servono customizzazioni, crea un nuovo componente wrapper.

**Nuovi componenti visibili**: importa e aggiungi SEMPRE il componente in `src/pages/Index.tsx` o nella pagina corretta, altrimenti non viene renderizzato.

**Scroll anchor**: la navigazione anchor usa `?scroll=sectionId` come query param (non hash). Il componente `Index.tsx` gestisce l'effetto con `useEffect` su `location.search`.

**BottomDock**: è un componente persistente in `App.tsx` fuori dalle route. Tiene il padding bottom `pb-32 md:pb-12` nelle pagine per non sovrapporsi.

## Supabase

- **Progetto**: `xzdazmzjltxsxyqokxdh`
- **Lead form**: usa la RPC `upsert_lead` (non insert diretto) per gestire deduplicazione e bypass RLS. NON tornare a insert diretto.
- Il client usa le env var `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` con fallback hardcoded (solo la anon key pubblica, non la service key).

## Design system

- **Colore primario**: `#94b0ab` (sage green)
- **Background**: `#f8f9fa`
- **Testo**: `#1a1a1a`
- **Selection**: `bg-[#94b0ab] text-white`
- Usa sempre Tailwind per lo styling. Evita CSS inline o file CSS separati.

## SEO

Ogni pagina usa `<Helmet>` (react-helmet-async) con: title, description, canonical, og:*, twitter:*, e structured data JSON-LD dove pertinente.

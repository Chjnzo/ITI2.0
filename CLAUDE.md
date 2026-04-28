# CLAUDE.md — Il Tuo Immobiliare (ITI 2.0)

Sito web per agenzia immobiliare a Bergamo (zero provvigioni per chi vende). React SPA deployata su Cloudflare Workers.

## Comandi essenziali

```bash
npm run dev        # dev server locale (Vite)
npm run build      # build produzione
npm run lint       # ESLint (0 errors richiesti)
npm run test       # Vitest smoke tests (3 test)
npm run test:watch # Vitest in watch mode
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
- **Monitoring**: Sentry (`src/lib/sentry.ts`) — init in `main.tsx`, logging via `src/utils/logger.ts`
- **Deploy**: Cloudflare Workers (`wrangler.jsonc` — modalità SPA)
- **SEO**: react-helmet-async in ogni pagina + structured data JSON-LD

## Struttura

```
src/
  App.tsx          ← routing e providers (QueryClient, TooltipProvider, ecc.)
  main.tsx         ← entry point; initSentry() va chiamato PRIMA di render
  pages/           ← pagine (lazy-loaded in App.tsx)
  components/      ← componenti riusabili
    ui/            ← shadcn/ui — NON modificare questi file, crea wrapper se necessario
  lib/
    supabaseClient.ts
    sentry.ts      ← Sentry init (legge VITE_SENTRY_DSN)
  utils/
    logger.ts      ← logger.error() chiama Sentry.captureException
    imageOptimizer.ts ← helper per Cloudflare Image Optimization URLs
  data/
    properties.ts  ← interfaccia Property + dati statici
  hooks/           ← custom hooks
  __tests__/
    smoke.test.tsx ← 3 smoke test (ContactForm, Immobili, PropertyDetail)
```

## Regole critiche

**Route**: aggiungi SEMPRE le nuove route in `src/App.tsx` con lazy import.

**shadcn/ui**: NON modificare i file in `src/components/ui/`. Se servono customizzazioni, crea un nuovo componente wrapper.

**Nuovi componenti visibili**: importa e aggiungi SEMPRE il componente in `src/pages/Index.tsx` o nella pagina corretta.

**Scroll anchor**: la navigazione anchor usa `?scroll=sectionId` come query param (non hash).

**BottomDock**: componente persistente in `App.tsx`. Padding `pb-32 md:pb-12` nelle pagine.

## Supabase

- **Progetto**: `xzdazmzjltxsxyqokxdh`
- **Lead form**: usa la RPC `upsert_lead` (non insert diretto) per deduplicazione e bypass RLS.
- Il client usa le env var `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY`.

### Rate limiting in `upsert_lead`

La RPC ha due livelli di protezione:
1. **15 minuti (hard)**: se la stessa email invia entro 15 min → `RAISE EXCEPTION 'Too many requests'` (ERRCODE P0001). Il frontend mostra "Riprova tra 15 minuti".
2. **24 ore (soft)**: se la stessa email ha inviato nelle ultime 24h → RETURN silenzioso (previene flooding delle note).

Il `ContactForm.tsx` gestisce il codice P0001 mostrando il messaggio `rate_limited`.

## Sentry Setup

1. Crea un progetto su [sentry.io](https://sentry.io) (tipo: React)
2. Copia il DSN e aggiungilo a `.env.local`:
   ```
   VITE_SENTRY_DSN=https://xxx@sentry.io/yyy
   ```
3. In produzione, aggiungi il secret `VITE_SENTRY_DSN` su GitHub (Actions) e Cloudflare.
4. `logger.error()` chiama automaticamente `Sentry.captureException`.
5. Se `VITE_SENTRY_DSN` è vuoto, Sentry non si inizializza (safe in dev locale).

## Testing

```bash
npm run test       # vitest run (CI)
npm run test:watch # vitest watch (dev)
```

Test in `src/__tests__/smoke.test.tsx`:
- ContactForm chiama `upsert_lead` RPC
- Immobili page renderizza senza crash
- PropertyDetail carica dati con `useParams`

Supabase è mockato via `vi.mock('@/lib/supabaseClient')`.

## Image Optimization

Usa `src/utils/imageOptimizer.ts` per trasformare URL in Cloudflare Image Optimization:

```ts
import { optimizeImage } from '@/utils/imageOptimizer';
const src = optimizeImage(url, { width: 800, quality: 80 });
// → /cdn-cgi/image/w=800,q=80,f=auto/https://...
```

Funziona solo se il dominio è su Cloudflare con Image Optimization abilitata.

## CI/CD (GitHub Actions)

File: `.github/workflows/deploy.yml`

- Trigger: push su `main` e PR verso `main`
- Steps: install → lint → build → deploy (solo su push a main)
- Secrets richiesti su GitHub:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_SENTRY_DSN`
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`

## Checklist pre-deploy

```bash
npm run lint    # 0 errors
npm run test    # 3/3 pass
npm run build   # ✓ built
```

Poi apri `MOBILE_TEST_CHECKLIST.md` e verifica le sezioni critiche (375px, BottomDock, form).

## Design system

- **Colore primario**: `#94b0ab` (sage green)
- **Background**: `#f8f9fa`
- **Testo**: `#1a1a1a`
- Usa sempre Tailwind per lo styling.

## SEO

Ogni pagina usa `<Helmet>` con: title, description, canonical, og:*, twitter:*, JSON-LD.

## Pagine legali

| Route | File | Note |
|---|---|---|
| `/privacy` | `Privacy.tsx` | GDPR, linkato dal footer |
| `/terms` | `Terms.tsx` | Termini di servizio |
| `/cookies` | `CookiePolicy.tsx` | Cookie tecnici + analitici |

Tutte e tre linkate dal `Footer.tsx`. `CookieBanner.tsx` linka Privacy + Cookies.

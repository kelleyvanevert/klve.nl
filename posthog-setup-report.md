<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into klve.nl, a Next.js 15 App Router personal portfolio site.

## Summary of changes

- **`instrumentation-client.ts`** (new): Initializes PostHog client-side using the Next.js 15.3+ instrumentation pattern. Includes error tracking (`capture_exceptions: true`) and a reverse proxy path (`/ingest`).
- **`next.config.js`** (edited): Added PostHog reverse proxy rewrites (`/ingest/*` → `eu.i.posthog.com`, `/ingest/static/*` and `/ingest/array/*` → `eu-assets.i.posthog.com`) and `skipTrailingSlashRedirect: true`.
- **`.env.local`** (new): Created with `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables.
- **`lib/AudioPlayer.tsx`** (edited): Captures `music_track_played` (on user play), `music_track_paused` (on user pause), and `music_track_finished` (when track ends) with `track_title` and `track_id` properties.
- **`lib/PhotoCategoryTracker.tsx`** (new): Thin client component that fires `photography_category_viewed` with `category` and `category_title` properties when a photo category page mounts.
- **`app/(main)/photography/[category]/page.tsx`** (edited): Renders `PhotoCategoryTracker` to fire the viewed event.
- **`lib/TrackedExternalLink.tsx`** (new): Client component wrapping `<a>` that fires a configurable PostHog event on click.
- **`app/(main)/page.tsx`** (edited): Uses `TrackedExternalLink` for the CV PDF link (`cv_link_clicked`) and for the work/teaching external links in the intro (`home_external_link_clicked`).

## Events

| Event                         | Description                                                           | File                           |
| ----------------------------- | --------------------------------------------------------------------- | ------------------------------ |
| `music_track_played`          | User presses play on a music track                                    | `lib/AudioPlayer.tsx`          |
| `music_track_paused`          | User pauses a music track                                             | `lib/AudioPlayer.tsx`          |
| `music_track_finished`        | A music track finishes playing                                        | `lib/AudioPlayer.tsx`          |
| `photography_category_viewed` | User navigates into a photography category                            | `lib/PhotoCategoryTracker.tsx` |
| `cv_link_clicked`             | User clicks the CV download link on the home page                     | `app/(main)/page.tsx`          |
| `home_external_link_clicked`  | User clicks an external link (work/teaching) from the home page intro | `app/(main)/page.tsx`          |

## Next steps

We've built a dashboard and five insights to keep an eye on user behavior:

- **Dashboard**: [Analytics basics](https://eu.posthog.com/project/170336/dashboard/655137)
- **Music track plays over time** — [View insight](https://eu.posthog.com/project/170336/insights/uBaIbE02)
- **Most played tracks** — [View insight](https://eu.posthog.com/project/170336/insights/tP216TLM)
- **Music track completion funnel** — [View insight](https://eu.posthog.com/project/170336/insights/Jx018Evw)
- **Photography categories viewed** — [View insight](https://eu.posthog.com/project/170336/insights/JCp91Fqw)
- **CV downloads & external link clicks** — [View insight](https://eu.posthog.com/project/170336/insights/oHTPOY18)

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/integration-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>

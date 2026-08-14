# Contributing to MediGate Frontend

Thanks for considering a contribution. MediGate is a community & public health tracking system on Stellar; this repository contains the React/TypeScript user interface.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating you agree to uphold it.

## Development Setup

Prerequisites: Node.js 20+ and npm.

```bash
git clone git@github.com:VicHealth/MediGate-frontend.git
cd MediGate-frontend
npm install
npm run dev      # start the Vite dev server
npm run build    # production build
```

## Project Layout

| Path | Purpose |
|---|---|
| `src/app/` | application pages and routing |
| `src/styles/` | global styles |
| `src/` | shared components and hooks |

## Making Changes

1. Branch per issue: `git checkout -b <issue-number>-<short-slug>`
2. Keep the app buildable — run `npm run build` before pushing.
3. Reference the issue in your commit body (`Closes #<issue>`).

## Pull Requests

- Reference the issue you're closing.
- Keep changes focused — one logical change per PR.
- A maintainer will review within ~48 hours and merge once CI is green.

## Security

Do not open public issues for security problems — follow the process in [SECURITY.md](SECURITY.md).

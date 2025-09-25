# DISC Employee Directory

A React + TypeScript web application for browsing employees by department and DISC profile, styled with Chakra UI.

## Features

- View employees with department and DISC profile info
- Filter employees by department
- Display DISC profiles with color indicators
- Responsive layout using Chakra UI
- Dark mode toggle

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Chakra UI](https://chakra-ui.com/)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running the App

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Environment Variables

Create a `.env` file in `frontend-disc/` with:

```
VITE_COMPANY_DISC_API_KEY=your_api_key_here
```

## Project Structure

- `src/components/` – UI components
- `src/hooks/` – Custom React hooks for data fetching
- `src/services/` – API client setup
- `src/assets/` – Images and static assets

## API

The app expects a backend API at `http://localhost:5194/api`. Update `src/services/api-client.ts` if your API URL differs.

## License

MIT

Todo:
genre list items look wierd
when filtering employees the old list is still shown while the new list is loading
REMEMBER TO DEPLOY -> auto deploy not working
reusebal gerneric list component

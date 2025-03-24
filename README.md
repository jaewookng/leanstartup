# SkinHealth App

A minimal Next.js application for skin health analysis based on sample codes.

## Features

- User authentication with sample codes
- Dashboard with key skin health metrics
- Personalized recommendations
- Mobile-first responsive design

## Tech Stack

- Next.js
- TypeScript
- React Query
- Chart.js
- Tailwind CSS

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App Structure

- `/components` - Reusable UI components
  - `/auth` - Authentication related components
  - `/dashboard` - Dashboard related components
  - `/shared` - Shared UI components
- `/pages` - Next.js pages
- `/styles` - Global styles
- `/types` - TypeScript types
- `/utils` - Utility functions and context providers

## Usage

1. Enter any sample code on the login screen (e.g., "SAMPLE123")
2. View your skin health metrics and recommendations
3. Log out when finished

## Note

This is a minimal version meant for demonstration purposes. In a production app, you would have:

- Real authentication backend
- Actual API integration
- More comprehensive testing
- Extended features like skin tracking over time
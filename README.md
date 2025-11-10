# next-mini-blog

A mini blog application built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **React Query**, and **React Hook Form**. The app includes a public blog section and a user dashboard.

## Features

### Public Blog

* Homepage listing blog posts with **pagination**.
* Blog detail pages with **dynamic routing**.
* SEO optimized: metadata, Open Graph tags, semantic HTML.

### User Dashboard

* Profile form: edit **name, family, email, mobile, date of birth, bio, favorites**.
* Searchable dropdowns for favorite selection.
* Form validation via **React Hook Form** + **Zod**.
* Profile data stored using **JSON Server**.
* All data fetching and mutation handled with **React Query**.

### UI & UX

* Components styled with **Tailwind CSS** and **shadCN**.
* Responsive and user-friendly interface.
* Reusable components and clean, typed code.

## Getting Started

### Install Dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### Run the Next.js App

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run the JSON Server

```bash
npx json-server --watch db.json --port 4000
```

This serves the user profile and other backend data for development.

## Technical Choices

* **Form Handling:** React Hook Form + Zod for validation and error handling.
* **Styling:** Tailwind CSS + shadCN for clean, responsive UI.
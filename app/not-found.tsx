'use client';

import { ErrorCard } from './components';

export default function NotFound() {
  return (
    <>
      <ErrorCard code={404} message="Page Not Found" />
    </>
  );
}

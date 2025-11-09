'use client';

import { ErrorCard } from './components';

export default function Error() {
  return (
    <>
      <ErrorCard code={500} />
    </>
  );
}

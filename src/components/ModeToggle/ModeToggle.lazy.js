import React, { lazy, Suspense } from 'react';

const LazyModeToggle = lazy(() => import('./ModeToggle'));

const ModeToggle = props => (
  <Suspense fallback={null}>
    <LazyModeToggle {...props} />
  </Suspense>
);

export default ModeToggle;

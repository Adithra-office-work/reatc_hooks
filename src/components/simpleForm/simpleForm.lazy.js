import React, { lazy, Suspense } from 'react';

const LazySimpleForm = lazy(() => import('./SimpleForm'));

const SimpleForm = props => (
  <Suspense fallback={null}>
    <LazySimpleForm {...props} />
  </Suspense>
);

export default SimpleForm;

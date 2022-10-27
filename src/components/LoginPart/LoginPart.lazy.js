import React, { lazy, Suspense } from 'react';

const LazyLoginPart = lazy(() => import('./LoginPart'));

const LoginPart = props => (
  <Suspense fallback={null}>
    <LazyLoginPart {...props} />
  </Suspense>
);

export default LoginPart;

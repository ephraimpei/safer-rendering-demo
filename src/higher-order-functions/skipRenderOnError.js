import React from 'react';
import { ErrorBoundary } from '@components';

/**
 * skipRenderOnError - skip the render when an error is caught from a sub component
 * @param WrappedComponent - the react component that will be wrapped by this hof
 */
const skipRenderOnError = WrappedComponent => props => (
  <ErrorBoundary type={ 'skip' }>
    <WrappedComponent { ...props } />
  </ErrorBoundary>
);

export default skipRenderOnError;
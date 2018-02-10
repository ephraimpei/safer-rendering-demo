import React from 'react';
import { ErrorBoundary } from '@components';

/**
 * renderPlaceholderOnError - render a placeholder image when an error is caught from a sub component
 * @param placeholder - placeholder component to render if there is an error
 * @param WrappedComponent - the react component that will be wrapped by this hof
 */
const renderPlaceholderOnError = placeholder => WrappedComponent => props => (
  <ErrorBoundary type={ 'placeholder' } placeholder={ placeholder }>
    <WrappedComponent { ...props } />
  </ErrorBoundary>
);

export default renderPlaceholderOnError;
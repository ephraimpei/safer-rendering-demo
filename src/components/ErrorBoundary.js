import React, { Component } from 'react';

/**
 * ErrorBoundary class - Use this to catch errors from sub components and gracefully handle them.
 */
class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });

    // MAKE SURE YOU LOG THIS SOMEWHERE (ie: Sentry.io)
    console.error(error);
    console.error(info);
  }

  render() {
    const { hasError } = this.state;
    const { type, placeholder } = this.props;

    if (hasError) {
      switch (type) {
        case 'placeholder':
          return placeholder;
        // case 'another-type'
        // case 'and-anotha-one'
        // case 'highly-extensible!'
        case 'skip':
        default:
          return null;
      }
    }

    // If no error just render the children
    return this.props.children;
  }
}

export default ErrorBoundary;

/**
 Decorator (HOC) withProps
 Add new props to the wrapped React component

 @params {Object} newProps
 @returns React component with own props which extends by a new props

 usage:
 const ModifiedComponent = withProps(newProps)(WrappedComponent);
 */

import React from 'react';

const withProps = newProps => WrappedComponent => ownProps => <WrappedComponent { ...ownProps } { ...newProps } />;

export default withProps;
 

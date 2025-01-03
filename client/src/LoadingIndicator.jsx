import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

const LoadingIndicator = () => (
  <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
    <Spinner />
  </Pane>
);

export default LoadingIndicator;
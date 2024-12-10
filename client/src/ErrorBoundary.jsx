import React from 'react';
import { Pane, Heading, Paragraph, Button } from 'evergreen-ui';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Pane display="flex" alignItems="center" justifyContent="center" height="100vh">
          <Pane textAlign="center">
            <Heading size={800} marginBottom={16}>Oops! Something went wrong.</Heading>
            <Paragraph size={400} marginBottom={32}>We're sorry for the inconvenience. Please try again later.</Paragraph>
            <Button onClick={() => window.location.reload()}>Refresh Page</Button>
          </Pane>
        </Pane>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
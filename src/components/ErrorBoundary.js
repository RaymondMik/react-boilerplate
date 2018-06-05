import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false,
          error: null
        };
    }
  
    componentDidCatch(error) {
        // Display fallback UI
        this.setState({ 
            hasError: true,
            error
        });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h2>{`${this.state.error} Please reload the browser`}</h2>;
      }
      return this.props.children;
    }
  }

ErrorBoundary.propTypes = {
  children: PropTypes.object
};

export default ErrorBoundary;
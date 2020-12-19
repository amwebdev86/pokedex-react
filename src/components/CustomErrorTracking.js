import React from 'react';
import RollebarErrorTracking from '../utils/RollbarErrorTracking';

export default function Catch(component, errorHandler) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
      };
    }

    static getDerivedStateFromError(error) {
      return { error };
    }

    componentDidCatch(error, info) {
      if (errorHandler) {
        RollebarErrorTracking.logErrorInfo(info);
        if (process.env.NODE_ENV === 'production') {
          RollebarErrorTracking.logErrorInRollbar(error);
        }
        errorHandler(error, info);
      }
    }
    // TODO: Import a custom component
    render() {
      const { error } = this.state;
      return component(this.props, error);
    }
  };
}

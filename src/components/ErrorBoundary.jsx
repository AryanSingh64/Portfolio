import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen bg-[#08060d] text-[#FEF9EE] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[8vw] font-black uppercase tracking-tighter mb-4">
              Oops.
            </h1>
            <p className="text-[2vw] font-bold opacity-70">
              Something broke. Refresh to retry.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

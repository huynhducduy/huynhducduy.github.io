import React from "react";
import PropTypes from "prop-types";

export const logErrorToMyService = () => {
    // implement here
};

class ErrorBoundary extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log("Error: " + error); // eslint-disable-line
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        logErrorToMyService(error, info);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return children;
    }
}

export default ErrorBoundary;

import React from 'react';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

Loading.propTypes = {
  pastDelay: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  timedOut: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  retry: PropTypes.func.isRequired,
};

Loading.defaultProps = {
  error: false,
};

function Loading({ pastDelay, isLoading, timedOut, error, retry }) {
  if (isLoading) {
    if (timedOut) {
      return <div>Connection timed out!</div>;
    }
    if (pastDelay) {
      return (
        <div
          style={{
            textAlign: 'center',
            height: '100%',
            width: '100%',
            maxHeight: '100vh',
            position: 'absolute',
            opacity: '1',
          }}
        >
          <Spinner
            animation="border"
            style={{
              transform: 'translateY(-50%) translateX(-50%)',
              top: '50%',
              left: '50%',
              position: 'absolute',
            }}
          />
        </div>
      );
    }
    return null;
  }
  if (error) {
    return (
      <div>
        <button type="button" onClick={retry}>
          Retry
        </button>
      </div>
    );
  }
  return null;
}

export default function (loader) {
  return Loadable({
    loader: () => loader,
    loading: Loading,
    timeout: 10000, // 10 seconds
    delay: 30000, // avoid flash
  });
}

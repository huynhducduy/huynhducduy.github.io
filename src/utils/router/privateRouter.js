import React from 'react';
import isAuthenticated from 'utils/auth/isAuthenticated';
import ConditionalRouter from './conditionalRouter';

export default function ({ component, ...rest }) {
  const config = {
    component,
    condition: isAuthenticated(),
    redirectTo: 'auth-login',
    reason: 'You dont have permission to access to this route',
    ...rest,
  };

  return <ConditionalRouter {...config} />;
}

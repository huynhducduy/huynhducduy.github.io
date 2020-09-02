import React from 'react';
import { Redirect } from 'react-router-dom';

export default function (to) {
  return () => <Redirect to={to} />;
}

import pathToRegexp from 'path-to-regexp';
import getRoute from './getRoute';

export default function (name, data = {}) {
  return pathToRegexp.compile(getRoute(name).path)(data);
}

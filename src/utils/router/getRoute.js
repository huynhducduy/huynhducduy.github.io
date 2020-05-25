import routes from '../../routes';

export default function (name) {
  return routes.find(e => e.name === name);
}

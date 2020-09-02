import loadableComponent from './utils/router/loadableComponent';
import redirectComponent from './utils/router/redirectComponent';

const errorPages = [];

export default [
  {
    name: 'home',
    path: '/',
    component: redirectComponent('/blog'),
    exact: true,
  },
  {
    name: 'resume',
    path: '/resume',
    component: loadableComponent(
      import('./app/resume' /* webpackChunkName: "resume" */)
    ),
    exact: true,
  },
  {
    name: 'blog-list',
    path: '/blog',
    component: loadableComponent(
      import('./app/blog/list' /* webpackChunkName: "blog-list" */)
    ),
    exact: true,
  },
  {
    name: 'blog-read',
    path: '/blog/:id',
    component: loadableComponent(
      import('./app/blog/read' /* webpackChunkName: "blog-list" */)
    ),
    exact: true,
  },
  ...errorPages,
];

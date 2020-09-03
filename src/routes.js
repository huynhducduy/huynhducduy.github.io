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
  {
    name: 'blog-edit',
    path: '/blog/:id/edit',
    component: loadableComponent(
      import('./app/blog/edit' /* webpackChunkName: "blog-edit" */)
    ),
    exact: true,
    access_level: 'protected',
  },
  {
    name: 'blog-write',
    path: '/blog/write',
    component: loadableComponent(
      import('./app/blog/write' /* webpackChunkName: "blog-write" */)
    ),
    exact: true,
    access_level: 'private',
  },
  {
    name: 'auth-login',
    path: '/auth/login',
    component: loadableComponent(
      import('./app/auth/login' /* webpackChunkName: "auth-login" */)
    ),
    exact: true,
    access_level: 'public',
  },
  {
    name: 'auth-register',
    path: '/auth/register',
    component: loadableComponent(
      import('./app/auth/register' /* webpackChunkName: "auth-register" */)
    ),
    exact: true,
    access_level: 'public',
  },
  {
    name: 'auth-profile',
    path: '/auth/profile',
    component: loadableComponent(
      import('./app/auth/profile' /* webpackChunkName: "auth-profile" */)
    ),
    exact: true,
    access_level: 'private',
  },
  {
    name: 'auth-changePass',
    path: '/auth/change-password',
    component: loadableComponent(
      import('./app/auth/changePass' /* webpackChunkName: "auth-changePass" */)
    ),
    exact: true,
    access_level: 'private',
  },
  {
    name: 'tag-list',
    path: '/tag',
    component: loadableComponent(
      import('./app/tag/list' /* webpackChunkName: "tag-list" */)
    ),
    exact: true,
  },
  {
    name: 'tag-read',
    path: '/tag/:tag',
    component: loadableComponent(
      import('./app/tag/read' /* webpackChunkName: "tag-read" */)
    ),
    exact: true,
  },
  {
    name: 'user-list',
    path: '/user',
    component: loadableComponent(
      import('./app/user/list' /* webpackChunkName: "user-list" */)
    ),
    exact: true,
  },
  {
    name: 'user-read',
    path: '/user/:id',
    component: loadableComponent(
      import('./app/user/read' /* webpackChunkName: "user-read" */)
    ),
    exact: true,
  },
  ...errorPages,
];

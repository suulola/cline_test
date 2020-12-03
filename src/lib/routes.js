import { lazy } from 'react';

const Home = lazy(() =>
  import('../lib/screens/Home/Home'),
);
const Login = lazy(() =>
  import('../lib/screens/Login/Login'),
);

const routes = [
  {
    title: 'Login',
    path: '/',
    exact: true,
    protected: false,
    component: Login,
  },
 
  {
    title: 'Home',
    path: '/dashboard',
    component: Home,
    exact: true,
    protected: false,
  },
];

export default routes;

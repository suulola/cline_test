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
    component: Login,
  },
  {
    title: 'Transactions',
    path: '/dashboard',
    component: Home,
    exact: true,
    protected: true,
    bgType: 'white',
    childModule: true,
  },
];

export default routes;

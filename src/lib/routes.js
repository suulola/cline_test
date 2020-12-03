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
    component: Home,
  },
  {
    title: 'Home',
    path: '/dashboard',
    component: Login,
    // exact: true,
    protected: false,
    bgType: 'white',
    // childModule: true,
  },
];

export default routes;

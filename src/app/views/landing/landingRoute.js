import { lazy } from 'react';
import { authRoles } from '../../auth/authRoles';

const Landing = lazy(() => import('./landing'));

const landingRoute = [
  {
    path: '/landing',
    component: Landing,
    auth: authRoles.guest,
  },
];

export default landingRoute;

import Home from '../views/pages/home-page';
import favorite from '../views/pages/favorite-page';
import detail from '../views/pages/detail-page';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': favorite,
  '/detail/:id': detail,
};

export default routes;

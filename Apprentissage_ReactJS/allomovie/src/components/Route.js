import Accueil from './Accueil';
import Favoris from './Favoris';
import Detail from './Detail';
import ErrorPage from './ErrorPage';

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Accueil />,
    title: "Accueil",
    isHeaderElement: true,
  },
  {
    path: "/film/:id",
    exact: false,
    component: <Detail />,
    title: "Detail",
    isHeaderElement: false,
  },
  {
    path: "/Favoris",
    exact: false,
    component: <Favoris />,
    title: "Favoris",
    isHeaderElement: true,
  },
  {
    path: "/ErrorPage",
    exact: false,
    component: <ErrorPage />,
    title: "ErrorPage",
    isHeaderElement: true,
  }
];
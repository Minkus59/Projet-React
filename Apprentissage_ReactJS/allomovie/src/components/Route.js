import Accueil from './Accueil';
import Favoris from './Favoris';
import Detail from './Detail';
import ErrorPage from './ErrorPage';

export const routes = [
  {
    id:1,
    path: "/",
    exact: true,
    component: Accueil,
    title: "Accueil"
  },
  {
    id:2,
    path: "/film/:filmId",
    exact: false,
    component: Detail,
    title: "Detail"
  },
  {
    id:3,
    path: "/Favoris",
    exact: false,
    component: Favoris,
    title: "Favoris"
  },
  {
    id:4,
    path: "",
    exact: false,
    component: ErrorPage,
    title: "ErrorPage"
  }
];
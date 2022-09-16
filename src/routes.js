import { MAIN_ROUTE, LOGIN_ROUTE } from "./routeConst/routeConst";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
];

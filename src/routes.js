import {MAIN_ROUTE, LOGIN_ROUTE, INT_PRINT} from "./routeConst/routeConst";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import IntPrint from "./pages/IntPrint";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage,
  },
  {
    path: INT_PRINT,
    Component: IntPrint
  }
];

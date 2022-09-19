import {
  MAIN_ROUTE,
  LOGIN_ROUTE,
  INT_PRINT,
  INT_PRINT_CALC
} from "./routeConst/routeConst";

import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import IntPrint from "./pages/IntPrint";
import IntPrintCalc from "./pages/calcs/IntPrintCalc";

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: MainPage
  },
  {
    path: LOGIN_ROUTE,
    Component: AuthPage
  },
  {
    path: INT_PRINT,
    Component: IntPrint
  },
  {
    path: INT_PRINT_CALC,
    Component: IntPrintCalc
  }
];

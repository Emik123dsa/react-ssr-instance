import Default from "../views/Default.jsx";
import NotFound from "../views/errors/404.jsx";
import History from "../views/History.jsx";

export const StaticRoutesConfig = [
  {
    key: "default",
    component: Default,
    exact: true,
    path: "/",
  },
  {
    key: "history",
    component: History,
    exact: true,
    path: "/history",
  },
  {
    key: "not-found",
    component: NotFound,
  },

];

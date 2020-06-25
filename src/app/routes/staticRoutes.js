import Default from "../views/Default.jsx";
import NotFound from "../views/errors/404.jsx";

export const StaticRoutesConfig = [
  {
    key: "default",
    component: Default,
    exact: true,
    path: "/",
  },
  {
    key: "not-found",
    component: NotFound,
  },
];

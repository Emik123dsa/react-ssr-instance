import Main from "../views/Main.jsx";
import World from "../views/World.jsx";
import NotFound from "../views/errors/404.jsx";

export const StaticRoutesConfig = [
  {
    key: "main",
    component: Main,
    exact: true,
    path: "/main",
  },
  {
    key: "world",
    component: World,
    exact: true,
    path: "/world",
  },
  {
    key: "not-found",
    component: NotFound,
  },
];

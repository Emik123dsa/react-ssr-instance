import Main from "../views/Main.jsx";
import World from "../views/World.jsx";

export const StaticRoutesConfig = [
  {
    key: "main",
    component: Main,
    exact: true,
    path: "/",
  },
  {
    key: "world",
    component: World,
    exact: true,
    path: "/world",
  },
];

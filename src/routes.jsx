import { Buy } from "./pages/Buy";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/buy/:id",
    element: <Buy />,
  },
];

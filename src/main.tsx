import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ThemeProviders from "./theme/ThemeProviders.tsx";
import ThemeWrapper from "./theme/ThemeWrapper.tsx";
import MainContainer from "./components/MainContainer.tsx";

const router = createBrowserRouter([
  {
    element: (
      <ThemeProviders>
        <ThemeWrapper>
          <App />
        </ThemeWrapper>
      </ThemeProviders>
    ),
    path: "/",
    errorElement: (
      <p className="text-red-500 text-center m-2">
        Something went wrong -error
      </p>
    ),
    children: [
      {
        path: "/",

        element: <MainContainer />,
      },
      {
        path: "/profile",

        element: "profile",
      },
      {
        path: "/about",
        element: "about",
      },
      {
        path: "/skills",
        element: "skills",
      },
      {
        path: "/projects",
        element: "project",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);

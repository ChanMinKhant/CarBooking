import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./../../App";

const AppRouter = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      component: <App />,
    },
  ];

  const routeGenerator = ({ id, path, component }) => {
    return <Route key={id} path={path} element={component} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item) =>
          routeGenerator({
            id: item.id,
            path: item.path,
            component: item.component,
          })
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

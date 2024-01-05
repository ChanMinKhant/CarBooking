import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookingForm from "../form/BookingForm";
import App from "./../../App";

const AppRouter = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      component: <App />,
    },
    {
      id: 2,
      path: "/booking/:id",
      component: <BookingForm />,
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

import React from "react";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Root from "../Pages/Root/Root";

const Routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
    ],
  },
];

export default Routes;

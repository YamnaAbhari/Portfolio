import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import {
  About,
  CrateBarrelWebsite,
  DigitalWebsite,
  Home,
  HotelWebsite,
  Projects,
} from "../pages";
;


const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "projects",
          element: <Projects />,
          children: [
            {
              path: "digital-land-website",
              element: <DigitalWebsite />,
            },
            {
              path: "booking-hotel-website",
              element: <HotelWebsite />,
            },
            {
              path: "crate-barrel-website",
              element: <CrateBarrelWebsite />,
            },
          ],
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
  ],
  {
    scrollRestoration: false,
  },
);

export default router;
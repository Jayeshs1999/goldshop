import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Landing from "./screens/Landing";
import HomeScreen from "./screens/HomeScreen";
import MenuListScreen from "./screens/MenuListScreen";
import HistoryScreen from "./screens/HistoryScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Landing />} />
      <Route index={true} path="/home" element={<HomeScreen />} />
      <Route index={true} path="/menuList" element={<MenuListScreen />} />
      <Route index={true} path="/history" element={<HistoryScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

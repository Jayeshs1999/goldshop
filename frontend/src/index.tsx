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
import { Provider } from "react-redux";
import Landing from "./screens/Landing";
// import ProductDetail from "./screens/ProductDetails";
// import LoginScreen from "./screens/LoginScreen";
// import RegisterScreen from "./screens/RegisterScreen";
import store from "./store";
// import PrivateRoute from "./components/PrivateRoute";
// import ProfileScreen from "./screens/ProfileScreen";
// import ProductListScreen from "./screens/admin/ProductListScreen";
// import ProductEditScreen from "./screens/admin/ProductEditScreen";
import BackgroundGradient from "./components/BackgroundGradient";
import SuccessScreen from "./utils/SuccessScreen/SuccessScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import YouTubeEmbed from "./screens/OurChannelScreen/OurChannelScreen";
import ParticipantListScreen from "./screens/ParticipantListScreen";
import ViewAdminParticipantScreen from "./screens/ViewParticipantAdmin/ViewParticipantsAdmin";
import NotFoundRoute from "./screens/NotFoundRoute";
import OurPartner from "./screens/admin/ourPartner/OurPartner";
import ContactUs from "./screens/contactUs/contactUs";
import OurBlogs from "./screens/blogs/OurBlogs";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/success" element={<SuccessScreen />}></Route>
      <Route path="/aboutUs" element={<AboutUsScreen />}></Route>
      <Route path="/ourChannel" element={<YouTubeEmbed />}></Route>
      <Route path="/participantList" element={<ParticipantListScreen />}></Route>
      <Route path="/viewParticipantListSDDSDFFDFCZXADSsdfdfefdcsade12343234543" element={<ViewAdminParticipantScreen />}></Route>
      <Route path="/ourPartner" element={<OurPartner />}></Route>
      <Route path="/contactUs" element={<ContactUs />}></Route>
      <Route path="/ourBlogs" element={<OurBlogs />}></Route>
      <Route path="/*" element={<NotFoundRoute />}></Route>
      

      {/* <Route path="/page/:pageNumber" element={<Landing />} />
      <Route path="/search/:keyword/page/:pageNumber" element={<Landing />} />
      <Route path="/login" element={<LoginScreen />} /> */}

      {/* <Route path="/register" element={<RegisterScreen />} /> */}
      {/* <Route path="/forgetpassword" element={<ForgetPasswordScreen />} /> */}
      {/* <Route path="/productDetail/:id" element={<ProductDetail />}></Route> */}

      {/*is any route make Private take it  here  */}
      {/* <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/productList" element={<ProductListScreen />} />
        <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
      </Route> */}
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
     <BackgroundGradient />
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

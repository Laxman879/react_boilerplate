import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// pages----
import Home from "./pages/Home";
import About from "./pages/About";

// RootLayouts--
import RootLayout from "./layouts/RootLayouts";
import HelpLayouts from "./layouts/HelpLayouts";
import FQA from "./pages/help/FQA";
import Contact from "./pages/help/contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayouts />}>
        <Route path="faq" element={<FQA />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

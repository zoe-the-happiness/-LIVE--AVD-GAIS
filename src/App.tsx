/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Membership } from "./pages/Membership";
import { Districts } from "./pages/Districts";
import { Notices } from "./pages/Notices";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="membership" element={<Membership />} />
            <Route path="districts" element={<Districts />} />
            <Route path="notices" element={<Notices />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

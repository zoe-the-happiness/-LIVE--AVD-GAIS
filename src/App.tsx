/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Lenis from "lenis";
import Layout from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Membership } from "./pages/Membership";
import { Districts } from "./pages/Districts";
import { Notices } from "./pages/Notices";
import { Gallery } from "./pages/Gallery";
import { MembersPortal } from "./pages/MembersPortal";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { RefundPolicy } from "./pages/RefundPolicy";
import { ShippingPolicy } from "./pages/ShippingPolicy";
import { Publications } from "./pages/Publications";
import { PublicationsNewsletter } from "./pages/PublicationsNewsletter";
import { PublicationsJournal } from "./pages/PublicationsJournal";
import { PublicationsSmaranika } from "./pages/PublicationsSmaranika";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="membership" element={<Membership />} />
            <Route path="districts" element={<Districts />} />
            <Route path="notices" element={<Notices />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="members-portal" element={<MembersPortal />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="publications" element={<Publications />} />
            <Route path="publications/newsletter" element={<PublicationsNewsletter />} />
            <Route path="publications/journal" element={<PublicationsJournal />} />
            <Route path="publications/smaranika" element={<PublicationsSmaranika />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

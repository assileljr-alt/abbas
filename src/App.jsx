import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-[#061735]">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/realisations" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

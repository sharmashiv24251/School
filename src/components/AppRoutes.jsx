// src/routes.js
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import AcademicsPage from "../pages/AcademicsPage";
import AdmissionsPage from "../pages/AdmissionsPage";
import FacultyPage from "../pages/FacultyPage";
import StudentsPage from "../pages/StudentsPage";
import GalleryPage from "../pages/GalleryPage";
import NotFound from "../pages/NotFound";
import ContactPage from "../pages/ContactPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/faculty" element={<FacultyPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;

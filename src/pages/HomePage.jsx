import React from "react";
import HomeCarousel from "@/components/HomeCarousel";
import logo from "../assets/springdale.png";
import AdmissionPage from "../pages/AdmissionsPage";

const carouselItems = [
  {
    id: 1,
    title: "Annual Sports Day",
    description: "Celebrating Excellence in Sports",
    img: "https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Science Exhibition",
    description: "Showcasing Student Innovations",
    img: "https://plus.unsplash.com/premium_photo-1683140893042-af3aa516ae40?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Cultural Fest",
    description: "Embracing Diversity and Creativity",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeCarousel carouselItems={carouselItems} />
      <AdmissionPage />
    </div>
  );
};

const Header = () => (
  <header className="relative text-black py-12 px-4 mt-[-9rem] sm:mt-[-7rem] z-[-100]">
    <div className="container mx-auto flex flex-col items-center text-center">
      <img
        src={logo}
        alt="Springdale Public School Logo"
        className="h-[15rem] sm:h-[20rem] w-auto mb-[-3rem]"
      />
      <h1 className="sm:text-5xl text-2xl font-extrabold mb-4">
        Public School
      </h1>
      <p className="sm:text-xl text-lg max-w-3xl mx-auto">
        "Welcome to Springdale Public School, where we nurture young minds for a
        brighter future."
      </p>
    </div>
  </header>
);

export default HomePage;

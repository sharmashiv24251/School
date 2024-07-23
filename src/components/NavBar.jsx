import React from "react";
import { NavLink } from "react-router-dom"; // Ensure you have this import for routing
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"; // Adjust the path as needed
import { Button } from "@/components/ui/button"; // Ensure this path is correct
import logo from "../assets/springdale.png"; // Adjust the path to your logo
import { Sheet, SheetClose, SheetTrigger, SheetContent } from "./ui/sheet";
export default function NavBar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="overflow-auto">
          <NavLink to="/" className="mr-6 hidden lg:flex">
            <img
              src={logo}
              className="h-[100px]"
              alt="Springdale Public School"
            />
            <span className="sr-only">Springdale Public School</span>
          </NavLink>
          <div className="grid gap-2 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex w-full items-center py-2 text-lg font-semibold ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {dropdownLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex w-full items-center py-2 text-lg font-semibold ${
                    isActive ? "text-orange-500" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <NavLink to="/" className="mr-6 hidden lg:flex">
        <img className="h-[100px]" src={logo} alt="Springdale Public School" />
        <span className="sr-only">Springdale Public School</span>
      </NavLink>
      <nav className="ml-auto hidden lg:flex gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `group inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
                isActive
                  ? "bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-600"
                  : "bg-white text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="group inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none">
              More
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute top-12 left-0 mt-0 bg-white shadow-lg rounded-md w-64 z-50 transform -translate-y-[50px]">
              <NavigationMenuList className="grid gap-2 p-0">
                {dropdownLinks.map((link) => (
                  <NavigationMenuItem key={link.path}>
                    <NavigationMenuLink asChild>
                      <NavLink
                        to={link.path}
                        className={`block px-4 py-2 text-sm rounded-md text-black`}
                      >
                        {link.label}
                      </NavLink>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
      </nav>
    </header>
  );
}

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/gallery", label: "Gallery" },
];

const dropdownLinks = [
  { path: "/academics", label: "Academics" },
  { path: "/admissions", label: "Admissions" },
  { path: "/faculty", label: "Faculty" },
  { path: "/students", label: "Students" },
];

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

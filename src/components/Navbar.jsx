import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for Sidebar

  return (
    <div>
      <header className="text-gray-600 body-font bg-slate-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center justify-between">
          {/* Logo Section */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="rounded-full h-14 w-14"
              src="../assets/logo.png"
              alt="logo"
            />
            <span className="ml-3 text-xl font-bold">Macho Tattoo</span>
          </a>

          {/* Navigation Links */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex flex-wrap items-center text-base justify-center w-full md:w-auto`}
          >
            <Link
              to="/"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/artists"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Artists
            </Link>
            <Link
              to="/tattoo-categories"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Tattoo Categories
            </Link>
            <Link
              to="/rewords"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Rewords
            </Link>
            <Link
              to="/blogs"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Blogs
            </Link>
            <Link
              to="/tattoo-pricing"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Tattoo Pricing
            </Link>
            <Link
              to="/locate-us"
              className="mr-5 hover:text-gray-900 transition duration-300 ease-in-out"
            >
              Locate Us
            </Link>

            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 512 512"
                className="ml-3"
              >
                <path
                  fill="black"
                  d="M391 480c-19.52 0-46.94-7.06-88-30c-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21c4.95-2.23 12.45-5.6 21.95-2c6.34 2.38 12 7.25 20.86 16c18.17 17.92 43 57.83 52.16 77.43c6.15 13.21 10.22 21.93 10.23 31.71c0 11.45-5.76 20.28-12.75 29.81c-1.31 1.79-2.61 3.5-3.87 5.16c-7.61 10-9.28 12.89-8.18 18.05c2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47c1.48-1.13 3-2.3 4.59-3.47c10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18c18 9.08 59.11 33.59 77.14 51.78c8.77 8.84 13.66 14.48 16.05 20.81c3.6 9.53.21 17-2 22c-.37.83-.78 1.74-1.21 2.75a176.5 176.5 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.4 67.4 0 0 1 391 480"
                />
              </svg>
            </button>
          </nav>

          {/* Action Button - Triggers Sidebar */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 transition duration-300 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="mt-5 bg-gray-500 py-2 ml-2 px-2 rounded-full focus:outline-none hover:bg-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
            />
          </svg>
        </button>
        <div className="p-5">
          <h2 className="text-xl font-bold mb-4">Sidebar Menu</h2>
          <ul>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/artists">Artists</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/tattoo-categories">Tattoo Categories</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/rewords">Rewords</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/tattoo-pricing">Tattoo Pricing</Link>
            </li>
            <li className="mb-3 hover:text-gray-300">
              <Link to="/locate-us">Locate Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-green-800 mx-5 sm:mx-10 md:mx-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex sm:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <X className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden sm:flex sm:flex-1 sm:items-center lg:justify-between">
            <div className="flex-1 flex items-center justify-center space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                About us
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium"
              >
                Gallery
              </a>
            </div>
            <div className="flex items-center justify-end sm:ml-4 lg:ml-8">
              <button className="bg-transparent border border-white rounded-full px-4 py-1">
                <p className="font-semibold text-base text-white">Contact</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              About us
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-white hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <div className="flex justify-end mt-4">
              <button className="bg-transparent border border-white rounded-full px-4 py-1">
                <p className="font-semibold text-base text-white">Contact</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

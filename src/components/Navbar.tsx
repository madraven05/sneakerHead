import { Bars3Icon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface navBarProps {
    navItems: {
        name: String,
        link: String
    }[]
}

const Navbar: React.FC<navBarProps> = ({navItems}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Global"
      className="flex items-center justify-between p-6 lg:px-8"
    >
      <div className="flex lg:flex-1 items-center">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <h1 className="text-3xl">Sneaker</h1>
          <h1 className="text-3xl">Head</h1>
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navItems.map((item) => (
          <Link className="font-semibold" to={item.link}>{item.name}</Link>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

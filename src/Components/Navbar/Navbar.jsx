import React, { useState } from "react";
import Link from "./Link/Link";
import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, Setopen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Services", path: "/services" },
    { id: 5, name: "Contact Us", path: "/contact" },
  ];
  return (
    <nav className="bg-purple-300 px-4">
      <div onClick={()=>Setopen(!open)} className="md:hidden">
        <span>{open==true?<XMarkIcon className="h-6 w-6 text-purple-500" />
        :<Bars3Icon className="h-6 w-6 text-purple-500" />
        }</span>
        
        
      </div>
      <ul className={`md:flex md:static absolute duration-500 bg-purple-400 pl-6 py-2 pb-4 ${open?'top-6':'-top-36'}`}>
        {routes.map((route) => (
          <Link route={route} key={route.id}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

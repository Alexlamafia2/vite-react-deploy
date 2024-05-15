import { NavLink } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <>
      <NavLink
        to="/about"
        className=" hover:text-blue-600 my-2 md:my-0 md:mx-2 text-xl transform duration-300"
      >
        About
      </NavLink>
      <NavLink
        to="/systems"
        className="hover:text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300"
      >
        Systems
      </NavLink>
      <NavLink
        to="/support"
        className="hover:text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300"
      >
        Support
      </NavLink>
      <NavLink
        to="/careers"
        className="hover:text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300"
      >
        Careers
      </NavLink>
      <NavLink
        to="/employee-portal"
        className="hover:text-blue-600 my-2 md:my-0  md:mx-2 text-xl transform duration-300"
      >
        Employee Portal
      </NavLink>
    </>
  );
}

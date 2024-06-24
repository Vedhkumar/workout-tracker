import { NavLink } from "react-router-dom";
function Header() {
  return (
    <nav className="p-3 bg-gray-300">
      <NavLink to="/" className="font-bold text-xl cursor-pointer">
        WORKOUT tRACKER
      </NavLink>
    </nav>
  );
}

export default Header;

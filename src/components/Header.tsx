import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between p-3 bg-gray-300">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "text-xl font-bold text-blue-700 cursor-pointer"
            : "text-xl font-bold cursor-pointer"
        }
      >
        WORKOUT tRACKER
      </NavLink>

      {/* Menu icon only visible on mobile devices */}
      <Menu className="cursor-pointer sm:hidden" />

      {/* navigation menu from shadcn */}
      <nav className="hidden sm:flex">
        <NavLink
          to="/routine"
          // className=""
          className={({ isActive }) =>
            isActive
              ? "hidden font-bold sm:flex text-blue-700 underline"
              : "hidden font-bold sm:flex hover:text-blue-700"
          }
        >
          Your Routine
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

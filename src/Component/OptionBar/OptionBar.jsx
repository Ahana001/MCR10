import "./OptionBar.css";

import { NavLink } from "react-router-dom";

export function OptionBar() {
  const menubarList = [
    {
      path: "/",
      label: "Dashboard",
    },
    {
      path: "/department",
      label: "Department",
    },
    {
      path: "/products",
      label: "Products",
    },
  ];
  function getActiveStyle({ isActive }) {
    return {
      fontWeight: isActive ? "500" : "",
      color: isActive ? "white" : "grey",
    };
  }
  return (
    <ul className="MenuBarList">
      {menubarList.map(({ label, path }) => {
        return (
          <li key={label}>
            <NavLink
              className="MenuBarListItem"
              to={path}
              style={getActiveStyle}
            >
              <span className="MenuBarText">{label}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

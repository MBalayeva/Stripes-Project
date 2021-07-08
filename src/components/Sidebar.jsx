import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import sublinks from "../data";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <aside
      className={isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map(({ page, links }, id) => {
            return (
              <article key={id}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map(({ label, icon, url }, id) => {
                    return (
                      <a href={url} key={id}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

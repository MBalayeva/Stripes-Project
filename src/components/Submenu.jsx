import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "../Context";

const Submenu = () => {
  const [col, setCol] = useState("col-2");
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);

  useEffect(() => {
    setCol("col-2");
    const { center, bottom } = location;
    const submenu = container.current;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setCol("col-2");
    }
    if (links.length > 3) {
      setCol("col-4");
    }
  }, [location, links]);

  return (
    <div className={isSubmenuOpen ? "submenu show" : "submenu"} ref={container}>
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
        {links.map(({ label, icon, url }, id) => {
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;

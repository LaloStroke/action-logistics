import React, { useState, useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

import "./sidebar.css";

const Sidebar: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleOutsideOpen = () => {
    setIsOpen(false);
  };
  const sidebarRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(sidebarRef, handleOutsideOpen);

  const handleStyles = isOpen ? "open" : "close";
  console.log(isOpen, "isOpen");
  return (
    <div className={handleStyles} ref={sidebarRef} onClick={handleOpen}>
      Sidebar
    </div>
  );
};

export default Sidebar;

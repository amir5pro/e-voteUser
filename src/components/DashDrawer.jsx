import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import Links from "../utils/Links";
const DashDrawer = ({ openDrawer, setOpenDrawer }) => {
  const onClose = () => {
    setOpenDrawer(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setOpenDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="md:hidden">
      <Drawer onClose={onClose} open={openDrawer} placement="left">
        <div className="w-full">
          {Links.map((link) => {
            const { text, path, icon } = link;
            return (
              <NavLink
                to={path}
                key={text}
                end
                onClick={() => setOpenDrawer(false)}
                className="link flex items-center pl-[20px] gap-[10px]  mt-[15px] h-[40px] hover:opacity-75 hover:text-primary-500 link"
              >
                <span>{icon}</span>
                <span>{text}</span>
              </NavLink>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
};

export default DashDrawer;

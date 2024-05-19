import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { NavLink } from "react-router-dom";
import Links from "../utils/Links";
import { FaPowerOff } from "react-icons/fa6";
import { useDashboardContext } from "../pages/DashboardLayout";
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

  const { logoutUser, user } = useDashboardContext();

  return (
    <div className="md:hidden">
      <Drawer onClose={onClose} open={openDrawer} placement="left">
        <div className="w-full">
          {Links.map((link) => {
            const { role } = user;
            const { text, path, icon } = link;
            if (
              (role !== "admin" && path === "admin") ||
              (role !== "candidate" && path === "candidates")
            ) {
              return null; // Do not render the link if conditions are met
            }
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
          <div
            onClick={() => logoutUser()}
            className="flex items-center gap-[10px] pl-[20px] h-[40px] mt-[30px] hover:opacity-75 hover:cursor-pointer hover:text-primary-500"
          >
            <span>
              <FaPowerOff />
            </span>
            <span>Logout</span>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default DashDrawer;

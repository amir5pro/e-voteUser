import React, { useEffect, useState } from "react";
import { Button, Drawer, Typography } from "antd";
import { Link } from "react-router-dom";
import hulogo from "../assets/image.png";

const { Text } = Typography;
const LandingDrawer = ({ setOpenHomeDrawer, openHomeDrawer }) => {
  const onClose = () => {
    setOpenHomeDrawer(false);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setOpenHomeDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Drawer onClose={onClose} open={openHomeDrawer} placement="right">
        <div className="w-full  flex flex-col gap-[20px] items-center">
          <div>
            <img
              src={hulogo}
              className=" h-[130px] w-[130px]    mb-[40px]"
              alt="logo"
            />
          </div>
          <Link to="voterlogin">
            <Text
              className=" hover:cursor-pointer hover:opacity-80 text-[20px]"
              strong
            >
              Voter Login
            </Text>
          </Link>
          <Link to="candidatelogin">
            <Text
              className=" hover:cursor-pointer hover:opacity-80 text-[20px]"
              strong
            >
              candidate Login
            </Text>
          </Link>
          <Link to="adminlogin">
            <Text
              className="hover:cursor-pointer hover:opacity-80 text-[20px] "
              strong
            >
              Admin Login
            </Text>
          </Link>{" "}
        </div>
      </Drawer>
    </div>
  );
};

export default LandingDrawer;

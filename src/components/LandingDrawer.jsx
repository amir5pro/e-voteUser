import React, { useEffect, useState } from "react";
import { Button, Drawer, Typography } from "antd";
import { Link } from "react-router-dom";

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
          <Link to="voterlogin">
            <Text className=" hover:cursor-pointer hover:opacity-80" strong>
              Voter Login
            </Text>
          </Link>
          <Link to="candidatelogin">
            <Text className=" hover:cursor-pointer hover:opacity-80" strong>
              candidate Login
            </Text>
          </Link>
          <Link to="adminlogin">
            <Text className="hover:cursor-pointer hover:opacity-80 " strong>
              Admin Login
            </Text>
          </Link>{" "}
        </div>
      </Drawer>
    </div>
  );
};

export default LandingDrawer;

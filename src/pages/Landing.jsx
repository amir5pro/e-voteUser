import React, { useEffect, useState } from "react";
import hulogo from "../assets/image.png";
import vote from "../assets/vote.png";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import LandingDrawer from "../components/LandingDrawer";

const { Text } = Typography;
const Landing = () => {
  const [viewBoxY, setViewBoxY] = useState(110);
  const [openHomeDrawer, setOpenHomeDrawer] = useState(false);

  useEffect(() => {
    const updateViewBoxY = () => {
      const screenWidth = window.innerWidth;
      let newY;
      if (screenWidth >= 1200) {
        newY = 110; // Laptop and above
      } else if (screenWidth >= 768) {
        newY = 50; // Tablet
      } else {
        newY = 30; // Mobile
      }
      setViewBoxY(newY);
    };

    // Call updateViewBoxY on initial render and when window is resized
    updateViewBoxY();
    window.addEventListener("resize", updateViewBoxY);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", updateViewBoxY);
  }, []);

  return (
    <div className="min-h-screen ">
      <div className="w-full relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 ${viewBoxY} 1440 ${160 + (100 - viewBoxY)}`}
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#242f9c" />
              <stop offset="100%" stopColor="#b5c1ff" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient)"
            d="M0,224L80,229.3C160,235,320,245,480,234.7C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute top-0 left-0 w-full  px-[30px] py-[6px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={hulogo}
                className=" h-10 w-10    md:h-20 md:w-20"
                alt="logo"
              />
              <Text className="text-white text-[15px] md:text-2xl">
                Hawassa University
              </Text>
            </div>
            <div className="md:hidden">
              <IoIosMenu
                style={{ color: "white" }}
                size={27}
                onClick={() => setOpenHomeDrawer(true)}
              />
            </div>

            <div className="md:flex items-center gap-8 hidden  ">
              <Link to="voterlogin">
                <Text
                  className="text-white hover:cursor-pointer hover:opacity-80"
                  strong
                >
                  Voter Login
                </Text>
              </Link>
              <Link to="candidatelogin">
                <Text
                  className="text-white hover:cursor-pointer hover:opacity-80"
                  strong
                >
                  candidate Login
                </Text>
              </Link>
              <Link to="adminlogin">
                <button className="py-[5px] px-[15px] bg-transparent border border-1 border-white border-opacity-80 rounded-3xl hover:opacity-75">
                  <Text className="text-white " strong>
                    Admin Login
                  </Text>
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="px-[30px] flex flex-col lg:flex-row items-center justify-evenly mt-[50px] 2xl:mt-[65px] lg:mt-0 gap-9 lg:gap-0">
        <div className="flex flex-col  items-center gap-5 max-w-[600px]">
          <Text
            className="text-primary-500 text-[25px] md:text-[40px] text-center "
            strong
          >
            Student Union Online Voting System
          </Text>
          <Text className=" text-[17px] md:text-[20px] text-center ">
            Empowering student voices through secure and accessible online
            voting
          </Text>
          <Link to="voterRegister">
            <button
              className="py-[8px] px-[15px] bg-gradient-to-r from-primary-500 to-primary-100 
           rounded-3xl hover:opacity-75 w-[250px]"
            >
              {" "}
              <Text className="text-white" strong>
                Register as Voter
              </Text>
            </button>
          </Link>{" "}
        </div>
        <div>
          <img src={vote} />
        </div>
      </div>
      <div>
        <LandingDrawer
          openHomeDrawer={openHomeDrawer}
          setOpenHomeDrawer={setOpenHomeDrawer}
        />
      </div>
    </div>
  );
};

export default Landing;

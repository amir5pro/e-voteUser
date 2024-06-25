import React, { createContext, useContext, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme, Typography } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import hulogo from "../assets/image.png";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Links from "../utils/Links";
import { IoIosMenu } from "react-icons/io";
import DashDrawer from "../components/DashDrawer";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { FaPowerOff } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import DatesModal from "../components/DatesModal";
import Loading from "../components/Loading";
import Cookies from "js-cookie";
const { Text } = Typography;

export const loader = async () => {
  try {
    const { data } = await customFetch("/user/current-user");

    return data;
  } catch (error) {
    return redirect("/");
  }
};
const DashboardContext = createContext();

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDates, setOpenDates] = useState(false);

  const { user } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const logoutUser = async (req, res) => {
    navigate("/");
    Cookies.remove("token");
    toast.success("Logging out...");
  };

  return (
    <DashboardContext.Provider value={{ user, logoutUser }}>
      <Layout hasSider>
        <Sider
          className="hidden md:block "
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            transition: "all 0.3s ease-in-out",
            background: "white",
          }}
        >
          <div className="demo-logo-vertical" />
          <div className="flex flex-col items-center h-full gap-[30px] ">
            <div className="px-[10px] py-[20px]">
              <img
                src={hulogo}
                className={`${
                  collapsed ? "w-[60px] h-[60px]" : "w-[90px] h-[90px]"
                }`}
              />
            </div>
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
                    className="link flex items-center pl-[20px] gap-[10px]  mt-[15px] h-[40px] hover:opacity-75 hover:text-primary-500 link"
                  >
                    <span>{icon}</span>
                    <span className={` ${collapsed && "hidden"}`}>{text}</span>
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
                <span className={` ${collapsed && "hidden"}`}>Logout</span>
              </div>
            </div>
          </div>
        </Sider>
        <Layout
          className={`${
            collapsed
              ? "md:ml-[80px] transition-all duration-500 ease-in-out "
              : "md:ml-[200px] transition-all duration-500 ease-in-out "
          } w-full  min-h-screen`}
        >
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
              position: "sticky",
              top: 0,
              zIndex: 999,
            }}
          >
            <div
              role="button"
              className="ml-[20px]  p-[10px] hidden md:block"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className="md:hidden  p-[15px]">
              <IoIosMenu size={27} onClick={() => setOpenDrawer(true)} />
            </div>
            <div className="absolute top-0 right-0 py-[15px] pr-[20px]">
              <div
                className="flex items-center gap-[5px] px-[15px] py-[6px] bg-primary-500 text-white rounded-md cursor-pointer"
                onClick={() => setOpenDates(true)}
              >
                <Text className="text-white ">Dates</Text>
                <SlCalender />
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "16px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              style={{
                padding: 16,
                textAlign: "center",
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                height: "100%",
              }}
            >
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}

              <DashDrawer
                openDrawer={openDrawer}
                setOpenDrawer={setOpenDrawer}
              />
              <DatesModal openDates={openDates} setOpenDates={setOpenDates} />
            </div>
          </Content>
        </Layout>
      </Layout>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default App;

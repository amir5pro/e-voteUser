import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme, Typography } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import hulogo from "../assets/image.png";
import { NavLink, Outlet } from "react-router-dom";
import Links from "../utils/Links";
const { Text } = Typography;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
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
              const { text, path, icon } = link;
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
          <Text
            className="absolute top-0 left-[50%] translate-x-[-50%] mt-[20px]  text-primary-500  lg:text-[20px] "
            strong
          >
            Student Union Online Voting System
          </Text>
        </Header>
        <Content
          style={{
            margin: "16px 16px 0",
            overflow: "initial",
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: "transparent",
              borderRadius: borderRadiusLG,
              height: "100%",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;

import React from "react";
import { Avatar, Typography, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;
const Cards = () => {
  return (
    <>
      <div
        className="w-[250px] h-[300px]  bg-white
         shadow-lg rounded-2xl p-[7px] flex flex-col items-center justify-around border border-gray-200"
      >
        <Avatar
          size={100}
          icon={<UserOutlined />}
          className=" border-2 border-white"
        />

        <div className="flex flex-col">
          <Text className="" strong>
            test
          </Text>
          <Text className="">Computer science</Text>
        </div>

        <div className="flex gap-3">
          <Button type="primary" shape="round" className="w-[100px]" disabled>
            Vote{" "}
          </Button>
          <Button
            shape="round"
            className="w-[110px] text-primary-500 border border-primary-500 hover:opacity-85"
          >
            View Details{" "}
          </Button>
        </div>
      </div>
      <div
        className="w-[250px] h-[300px] bg-white 
         shadow-lg rounded-2xl p-[7px] flex flex-col items-center justify-around border border-gray-200"
      >
        <Avatar
          size={100}
          icon={<UserOutlined />}
          className=" border-2 border-white"
        />

        <div className="flex flex-col">
          <Text className="" strong>
            test
          </Text>
          <Text className="">Computer science</Text>
        </div>

        <div className="flex gap-3">
          <Button type="primary" shape="round" className="w-[100px]">
            Vote{" "}
          </Button>
          <Button
            shape="round"
            className="w-[110px] text-primary-500 border border-primary-500 hover:opacity-85"
          >
            View Details{" "}
          </Button>
        </div>
      </div>
      <div
        className="w-[250px] h-[300px] bg-white
         shadow-lg rounded-2xl p-[7px] flex flex-col items-center justify-around border border-gray-200"
      >
        <Avatar
          size={100}
          icon={<UserOutlined />}
          className=" border-2 border-white"
        />

        <div className="flex flex-col">
          <Text className="" strong>
            test
          </Text>
          <Text className="">Computer science</Text>
        </div>

        <div className="flex gap-3">
          <Button type="primary" shape="round" className="w-[100px]">
            Vote{" "}
          </Button>
          <Button
            shape="round"
            className="w-[110px] text-primary-500 border border-primary-500 hover:opacity-85"
          >
            View Details{" "}
          </Button>
        </div>
      </div>
      <div
        className="w-[250px] h-[300px] bg-white 
         shadow-lg rounded-2xl p-[7px] flex flex-col items-center justify-around border border-gray-200"
      >
        <Avatar
          size={100}
          icon={<UserOutlined />}
          className=" border-2 border-white"
        />

        <div className="flex flex-col">
          <Text className="" strong>
            test
          </Text>
          <Text className="">Computer science</Text>
        </div>

        <div className="flex gap-3">
          <Button type="primary" shape="round" className="w-[100px]">
            Vote{" "}
          </Button>
          <Button
            shape="round"
            className="w-[110px] text-primary-500 border border-primary-500 hover:opacity-85"
          >
            View Details{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cards;

import React from "react";
import { Typography, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaUpload } from "react-icons/fa6";
const { Text } = Typography;

const Candidate = () => {
  return (
    <div>
      <Text className="text-primary-500 text-[25px]" strong>
        Candidates profile page
      </Text>
      <div>
        <div className="w-full h-[200px] shadow-lg rounded-2xl bg-white m-auto border border-gray-200 flex items-center justify-around">
          <div className="flex items-start gap-3">
            <Avatar
              size={120}
              icon={<UserOutlined />}
              className=" border-2 border-white"
            />
            <div className="flex flex-col gap-3">
              <Text strong>test test</Text>
              <Text>text</Text>
              <Text>test</Text>
            </div>
          </div>
          <div>
            <Button className="w-[150px] text-primary-500 border border-primary-500 hover:opacity-85 ">
              <FaUpload />
              upload photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;

import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Typography, Avatar, Button, Upload, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineEdit } from "react-icons/md";
import ProfileModal from "../components/ProfileModal";
import { useDashboardContext } from "./DashboardLayout";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const props = {
  name: "file",
  action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const Candidate = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useDashboardContext();

  useEffect(() => {
    if (user.role !== "candidate") {
      navigate("/dashboard");
    }
  }, []);
  return (
    <div>
      <Text className="text-primary-500 text-[25px]" strong>
        Candidates profile page
      </Text>
      <ProfileModal open={open} setOpen={setOpen} />
      <div>
        <div
          className="w-[100%] lg:w-[80%] h-[250px] md:h-[200px] my-[30px] shadow-lg 
        rounded-2xl bg-white m-auto border border-gray-200 flex flex-col md:flex-row items-center justify-between p-[20px]"
        >
          <div className="flex items-start gap-[20px]">
            <Avatar
              size={120}
              icon={<UserOutlined />}
              className=" border-2 border-white object-contain"
            />
            <div className="flex flex-col gap-3 items-start">
              <Text strong>test test</Text>
              <Text>text</Text>
              <Text>test</Text>
            </div>
          </div>
          <div>
            <Upload {...props}>
              <Button icon={<UploadOutlined />} type="primary">
                Upload photo
              </Button>
            </Upload>
          </div>
        </div>
        <div
          className="w-[100%] lg:w-[80%] h-[fit-content] my-[30px] shadow-lg 
        rounded-2xl bg-white m-auto border border-gray-200 p-[20px]"
        >
          <Text strong>Personal information</Text>
          <div className="flex flex-col md:flex-row items-center justify-between mt-[20px]">
            <div className="w-[100%] md:w-[50%]">
              <div className="flex justify-between mb-[20px]">
                <div className="flex flex-col items-start">
                  <Text>First name</Text>
                  <Text type="secondary">test</Text>
                </div>
                <div className="flex flex-col items-start">
                  <Text>Last name</Text>
                  <Text type="secondary">test</Text>
                </div>
              </div>
              <div className="flex justify-between mb-[20px]">
                <div className="flex flex-col items-start">
                  <Text>Email</Text>
                  <Text type="secondary">test</Text>
                </div>
                <div className="flex flex-col items-start">
                  <Text>Phone number</Text>
                  <Text type="secondary">test</Text>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col items-start">
                  <Text>Age</Text>
                  <Text type="secondary">test</Text>
                </div>
                <div className="flex flex-col items-start">
                  <Text>Department</Text>
                  <Text type="secondary">test</Text>
                </div>
              </div>
              <div className="flex flex-col items-start mt-[20px]">
                <Text>Campaign</Text>
                <Text type="secondary">not added</Text>
              </div>
            </div>
            <div>
              <Button
                icon={<MdOutlineEdit />}
                type="primary"
                onClick={() => setOpen(true)}
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;

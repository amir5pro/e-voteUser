import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Typography, Avatar, Button, Upload, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineEdit } from "react-icons/md";
import ProfileModal from "../components/ProfileModal";
import { useDashboardContext } from "./DashboardLayout";
import { useNavigate } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
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
      <ProfileModal open={open} setOpen={setOpen} />
      <div>
        <div
          className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
        >
          <div className="flex items-center gap-[15px] ">
            <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
              <FaPhotoFilm size={35} />
            </div>
            <Text className="text-[15px] " strong>
              profile picture Settings
            </Text>
          </div>
          <div className="border border-gray-200 my-[15px]"></div>

          <div className="flex items-center justify-between py-[5px]">
            <div>
              <Upload {...props}>
                <Button icon={<UploadOutlined />} type="primary">
                  Upload photo
                </Button>
              </Upload>
            </div>
          </div>
        </div>
        <div
          className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
        >
          <div className="flex items-center gap-[15px] ">
            <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
              <IoIosInformationCircle size={35} />
            </div>
            <Text className="text-[15px] " strong>
              Information Settings
            </Text>
          </div>
          <div className="border border-gray-200 my-[15px]"></div>

          <div className="flex items-center justify-between py-[5px]">
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

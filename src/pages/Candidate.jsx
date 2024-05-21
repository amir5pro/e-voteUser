import React, { useEffect, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Typography, Avatar, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MdOutlineEdit } from "react-icons/md";
import ProfileModal from "../components/ProfileModal";
import { useDashboardContext } from "./DashboardLayout";
import { useNavigate } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
const { Text } = Typography;

const Candidate = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { user } = useDashboardContext();

  useEffect(() => {
    if (user.role !== "candidate") {
      navigate("/dashboard");
    }
  }, []);

  const fileInputRef = useRef(null);

  const handleUpload = () => {
    const fileInput = fileInputRef.current;
    fileInput.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert file size to MB
      if (fileSizeInMB <= 0.5) {
        const formData = new FormData();
        formData.append("avatar", file);
        setLoading(true);
        try {
          await customFetch.patch("/candidate/addPhoto", formData);
          toast.success("Profile photo successfully uploaded");
          setLoading(false);
        } catch (error) {
          setLoading(false);
          toast.error(error?.response?.data?.msg);
        }
      } else {
        // File size exceeds the limit
        toast.error("File size should be 0.5 MB or less.");
      }
    }
  };

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
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
                name="avatar"
              />
              <Button
                icon={<UploadOutlined />}
                type="primary"
                onClick={handleUpload}
                loading={loading}
              >
                Upload photo
              </Button>
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

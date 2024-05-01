import React from "react";
import { Button, Form, Input, Typography, DatePicker } from "antd";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEdit } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const { RangePicker } = DatePicker;
const { Text } = Typography;
const Admin = () => {
  return (
    <div>
      <div
        className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
      >
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
            <CgProfile size={35} />
          </div>
          <Text className="text-[15px] " strong>
            Profile Settings
          </Text>
        </div>
        <div className="border border-gray-200 my-[15px]"></div>

        <div className="flex items-center justify-between py-[5px]">
          <Text>Change username</Text>
          <div>
            <Button
              type="primary"
              className="w-[80px]"
              icon={<MdOutlineEdit />}
            >
              Edit{" "}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-[5px]">
          <Text>Change Password</Text>
          <div>
            <Button
              type="primary"
              className="w-[80px]"
              icon={<MdOutlineEdit />}
            >
              Edit{" "}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
      >
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
            <SlCalender size={25} />
          </div>
          <Text className="text-[15px] " strong>
            Date settings
          </Text>
        </div>
        <div className="border border-gray-200 my-[15px]"></div>

        <div className="flex flex-col gap-[5px] mb-[5px] lg:mb-0 lg:flex-row items-center justify-between py-[5px] ">
          <Text> voter registration date</Text>
          <div className="flex items-center gap-[25px] ">
            <RangePicker />
            <Button type="primary" className="w-[80px]">
              Set{" "}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[5px]  mb-[5px] lg:mb-0  lg:flex-row items-center justify-between  py-[5px]">
          <Text>preliminary voting date</Text>
          <div className="flex items-center gap-[25px]">
            <RangePicker />
            <Button type="primary" className="w-[80px]">
              Set{" "}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-[5px]  mb-[5px] lg:mb-0  lg:flex-row items-center justify-between  py-[5px]">
          <Text>main voting date</Text>
          <div className="flex items-center gap-[25px]">
            <RangePicker />
            <Button type="primary" className="w-[80px]">
              Set{" "}
            </Button>
          </div>
        </div>
      </div>
      <div
        className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
      >
        <div className="flex items-center gap-[15px]">
          <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
            <FaUserCog size={35} />
          </div>
          <Text className="text-[15px] " strong>
            User Settings
          </Text>
        </div>
        <div className="border border-gray-200 my-[15px]"></div>

        <div className="flex items-center justify-between py-[5px]">
          <Text>Add voter</Text>
          <div>
            <Button type="primary" className="w-[100px]" icon={<IoMdAdd />}>
              Add{" "}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-[5px]">
          <Text>Delete voter</Text>
          <div>
            <Button
              type="primary"
              className="w-[100px]"
              icon={<MdOutlineDeleteOutline />}
            >
              Delete{" "}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between py-[5px]">
          <Text>Delete candidate</Text>
          <div>
            <Button
              type="primary"
              className="w-[100px]"
              icon={<MdOutlineDeleteOutline />}
            >
              Delete{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

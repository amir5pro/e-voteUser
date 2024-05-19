import React, { useEffect, useState } from "react";
import { Button, Form, Input, Typography, DatePicker } from "antd";
import { CgProfile } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { MdOutlineEdit } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useDashboardContext } from "./DashboardLayout";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../components/ChangePassword";
import VoterRegDate from "../components/VoterRegDate";
import PreVoteDate from "../components/PreVoteDate";
import MainVoteDate from "../components/MainVoteDate";
import AddVoter from "../components/AddVoter";
import DeleteStudent from "../components/DeleteStudent";

const { RangePicker } = DatePicker;
const { Text } = Typography;

const Admin = () => {
  const navigate = useNavigate();
  const { user } = useDashboardContext();
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [addVoterOpen, setAddVoterOpen] = useState(false);
  const [deleteVoterOpen, setDeleteVoterOpen] = useState(false);

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/dashboard");
    }
  }, []);

  return (
    <div>
      <div
        className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]"
      >
        <div className="flex items-center gap-[15px] ">
          <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
            <CgProfile size={35} />
          </div>
          <Text className="text-[15px] " strong>
            Profile Settings
          </Text>
        </div>
        <div className="border border-gray-200 my-[15px]"></div>

        <div className="flex items-center justify-between py-[5px]">
          <Text>Change Password</Text>
          <div>
            <Button
              type="primary"
              className="w-[80px]"
              icon={<MdOutlineEdit />}
              onClick={() => setPasswordOpen(true)}
            >
              Edit{" "}
            </Button>
            <ChangePassword
              passwordOpen={passwordOpen}
              setPasswordOpen={setPasswordOpen}
            />
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

        <div className="flex items-center justify-center ">
          <VoterRegDate />
        </div>
        <div className="border border-gray-100 my-[10px]"></div>

        <div className="flex items-center justify-center">
          <PreVoteDate />
        </div>
        <div className="border border-gray-100 my-[10px]"></div>

        <div className="flex items-center justify-center">
          <MainVoteDate />
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
          <Text>Add Voter</Text>
          <div>
            <Button
              type="primary"
              className="w-[100px]"
              icon={<IoMdAdd />}
              onClick={() => setAddVoterOpen(true)}
            >
              Add{" "}
            </Button>
          </div>
        </div>
        <AddVoter
          addVoterOpen={addVoterOpen}
          setAddVoterOpen={setAddVoterOpen}
        />
        <div className="flex items-center justify-between py-[5px]">
          <Text>Delete voter </Text>
          <div>
            <Button
              type="primary"
              className="w-[100px]"
              icon={<MdOutlineDeleteOutline />}
              onClick={() => setDeleteVoterOpen(true)}
            >
              Delete{" "}
            </Button>
          </div>
        </div>
        <DeleteStudent
          deleteVoterOpen={deleteVoterOpen}
          setDeleteVoterOpen={setDeleteVoterOpen}
        />
      </div>
    </div>
  );
};

export default Admin;

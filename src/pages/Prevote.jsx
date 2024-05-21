import React, { useState } from "react";
import { Button, Modal, Form, Input, Select, Typography } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { MdOutlineWhereToVote } from "react-icons/md";

const { Text } = Typography;
const Prevote = () => {
  const [loading, setLoading] = useState(false);

  const [searchResults, setSearchResults] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const searchStudents = async () => {
    try {
      const response = await customFetch(`/student/allStudents`);
      const allStudents = response.data.students;

      setSearchResults(allStudents);
    } catch (error) {}
  };

  const handleVote = async () => {
    setLoading(true);
    try {
      const response = await customFetch.post(
        `/student/prevote/${selectedStudentId}`
      );

      toast.success("successfully voted");
      setLoading(false);
      setSearchResults([]);
      setSelectedStudentId(null);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 mb-[30px]">
        <Text className="text-primary-500 text-[20px]" strong>
          Welcome to Preliminary Voting!
        </Text>
        <Text>
          Choose your candidates! Cast your preliminary vote now to select the
          candidates that will compete in the election.
        </Text>
      </div>
      <div>
        <div
          className="border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] mt-[20px]  "
        >
          <div className="flex items-center gap-[15px] ">
            <div className="p-[10px] w-[50px] h-[50px] bg-primary-500 rounded-full text-white flex items-center justify-center">
              <MdOutlineWhereToVote size={35} />
            </div>
            <Text className="text-[15px] " strong>
              Choose a student
            </Text>
          </div>
          <div className="border border-gray-200 my-[15px]"></div>
          <div className=" flex flex-col gap-[20px] sm:flex-row items-center justify-center">
            <div>
              <Select
                showSearch
                onClick={searchStudents}
                onChange={(value) => setSelectedStudentId(value)}
                className="w-[260px] sm:w-[350px] "
              >
                {searchResults.map((student) => (
                  <Select.Option
                    key={student._id}
                    value={student._id}
                    label={student._id}
                  >
                    {student.name} {student.studentId}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <Button
              type="primary"
              onClick={() => handleVote()}
              loading={loading}
              className="w-[100px]"
            >
              vote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prevote;

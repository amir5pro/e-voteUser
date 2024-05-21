import React, { useState } from "react";

import { Button, Modal, Form, Input, Select, Typography } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const { Text } = Typography;
const Prevote = () => {
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const searchStudents = async (query) => {
    try {
      const response = await customFetch(`/student/allStudents?name=${query}`);
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
      setSearchQuery("");
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
        <div className="h-[100px]  flex-col sm:flex-row  items-center sm:justify-evenly">
          <div>
            <Select
              showSearch
              onSearch={searchStudents} // Call searchStudents on each search input change
              onChange={(value) => setSelectedStudentId(value)}
              className="w-[200px] md:w-[250px] xl:w-[300px]"
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

          <Button type="primary" onClick={() => handleVote()} loading={loading}>
            vote
          </Button>
        </div>
      </div>
    </>
  );
};

export default Prevote;

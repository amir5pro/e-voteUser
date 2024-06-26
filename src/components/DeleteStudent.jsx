import React, { useState } from "react";

import { Button, Modal, Form, Input, Select } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const DeleteStudent = ({ deleteVoterOpen, setDeleteVoterOpen }) => {
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const searchStudents = async () => {
    try {
      const response = await customFetch(`/student/allStudents`);
      const allStudents = response.data.students;

      if (allStudents && allStudents.length > 0) {
        setSearchResults(allStudents);
      } else {
        setSearchResults([]);
      }
    } catch (error) {}
  };
  const handleDeleteStudent = async () => {
    setLoading(true);
    try {
      const response = await customFetch.delete(
        `/admin/student/${selectedStudentId}`
      );

      toast.success("Student deleted successfully");
      setLoading(false);
      setSearchQuery("");
      setSearchResults([]);
      setSelectedStudentId(null);
      setDeleteVoterOpen(false);
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      setLoading(false);
    }
  };

  return (
    <div>
      <Modal
        open={deleteVoterOpen}
        title="Delete Voter"
        onCancel={() => {
          setDeleteVoterOpen(false);
          setLoading(false);
        }}
        footer={null}
      >
        <div className="h-[100px]  flex-col sm:flex-row  items-center sm:justify-evenly">
          <div>
            <Select
              showSearch
              onClick={searchStudents}
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

          <Button
            type="primary"
            onClick={() => handleDeleteStudent()}
            loading={loading}
            className="mt-[20px]"
          >
            Delete voter
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteStudent;

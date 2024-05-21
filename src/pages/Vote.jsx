import React, { useState } from "react";
import { Typography, Button, Avatar } from "antd";

import { UserOutlined } from "@ant-design/icons";
import { useLoaderData, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import DetailsModal from "../components/DetailsModal";
import { toast } from "react-toastify";

const { Text } = Typography;

export const loader = async () => {
  try {
    const { data } = await customFetch("/student/candidates");
    return data;
  } catch (error) {
    return null;
  }
};

const Vote = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null); // State to keep track of the selected candidate
  const [selectedCandidateDetails, setSelectedCandidateDetails] =
    useState(null);
  const loaderData = useLoaderData();
  const { data } = loaderData || {};
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVoteClick = (candidateId) => {
    setSelectedCandidate((prevSelectedCandidate) =>
      prevSelectedCandidate === candidateId ? null : candidateId
    );
  };
  const handleViewDetailsClick = (candidateDetails) => {
    setSelectedCandidateDetails(candidateDetails);
    setDetailsOpen(true);
  };

  const handleSubmitClick = async () => {
    // Make an Axios request using the selected candidate's ID
    if (selectedCandidate) {
      setLoading(true);
      try {
        await customFetch.post(`/student/candidates/${selectedCandidate}`);

        toast.success("successfully voted");
        navigate("results");
        setLoading(false);
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        setLoading(false);
      }
    }
  };

  if (!data || data.length === 0) {
    return <Text>No candidates are available!</Text>;
  }

  return (
    <div>
      <div>
        <div className="flex flex-col items-center">
          <Text strong>You can only vote for one candidate</Text>
        </div>
        <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 py-[15px]  place-items-center">
          {data.map(
            (
              { candidateId, name, Department, Age, phone, email, Campaign },
              index
            ) => {
              return (
                <div
                  className={`w-[250px] h-[300px]  bg-white
           shadow-lg rounded-2xl p-[7px] flex flex-col items-center justify-around border ${
             selectedCandidate === candidateId
               ? "border-primary-500"
               : "border-gray-200"
           }`}
                  key={index}
                >
                  <Avatar
                    size={100}
                    icon={<UserOutlined />}
                    className=" border-2 border-white"
                  />

                  <div className="flex flex-col">
                    <Text className="" strong>
                      {name}
                    </Text>
                    <Text className="">
                      {Department ? Department : "Info Not added"}
                    </Text>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      type="primary"
                      shape="round"
                      className="w-[100px]"
                      onClick={() => handleVoteClick(candidateId)}
                    >
                      Vote
                    </Button>
                    <Button
                      shape="round"
                      className="w-[110px] text-primary-500 border border-primary-500 hover:opacity-85"
                      onClick={() =>
                        handleViewDetailsClick({
                          name,
                          Department,
                          Age,
                          phone,
                          email,
                          Campaign,
                        })
                      }
                    >
                      View Details{" "}
                    </Button>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
      <DetailsModal
        detailsOpen={detailsOpen}
        setDetailsOpen={setDetailsOpen}
        selectedCandidateDetails={selectedCandidateDetails}
      />
      <div className="flex flex-col items-center gap-3">
        <Text>Double check your choices before submitting your votes </Text>
        <Button
          type="primary"
          shape="round"
          className="w-[100px]"
          onClick={handleSubmitClick}
          disabled={!selectedCandidate}
          loading={loading}
        >
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};

export default Vote;

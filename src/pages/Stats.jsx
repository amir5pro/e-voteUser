import React from "react";
import { Typography, Progress } from "antd";
import AreaChartComponent from "../components/AreaChart";
import { useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
const { Text } = Typography;

export const loader = async () => {
  try {
    const { data } = await customFetch("/student/stats");

    return data;
  } catch (error) {
    return null;
  }
};

const Stats = () => {
  const loaderData = useLoaderData();

  const { totalEligibleVoters, totalVoters, voterBasedOnGender } =
    loaderData || {};

  if (
    !totalEligibleVoters ||
    !totalVoters ||
    !voterBasedOnGender ||
    voterBasedOnGender.length === 0
  ) {
    return <Text>No statistics are available!</Text>;
  }

  const transformedData = voterBasedOnGender.map(({ _id, count }) => ({
    gender: _id,
    voters: count,
  }));

  const voterTurnoutPercentage = (totalVoters / totalEligibleVoters) * 100;
  return (
    <div>
      <Text className="text-primary-500 text-[20px]" strong>
        Election Statistics
      </Text>
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-[20px] gap-[20px] sm:gap-[5px] md:gap-[20px] xl:gap-[50px] lg:px-[30px]">
        <div
          className="flex flex-col-reverse gap-[20px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] border-b-primary-500 border-b-[5px]"
        >
          <Text>Total Number of Eligible Voters</Text>
          <Progress
            type="dashboard"
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20}
            strokeColor="#242f9c"
            steps={10}
            percent={100}
            format={() => totalEligibleVoters}
          />
        </div>
        <div
          className="flex flex-col-reverse gap-[20px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] border-b-primary-500 border-b-[5px]"
        >
          <Text>Number of Voters Who Have Voted</Text>
          <Progress
            type="dashboard"
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20}
            strokeColor="#242f9c"
            steps={10}
            percent={(totalVoters / totalEligibleVoters) * 100}
            format={() => totalVoters}
          />
        </div>
        <div
          className="flex flex-col-reverse gap-[20px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[15px] border-b-primary-500 border-b-[5px]"
        >
          <Text>Percentage of Voter Turnout</Text>
          <Progress
            type="dashboard"
            trailColor="rgba(0, 0, 0, 0.06)"
            strokeWidth={20}
            strokeColor="#242f9c"
            steps={10}
            percent={voterTurnoutPercentage.toFixed(0)}
          />
        </div>
      </div>
      <div className="my-[30px] ">
        <Text className="text-primary-500 " strong>
          Voting trend based on gender{" "}
        </Text>
      </div>
      <div>
        <AreaChartComponent data={transformedData} />
      </div>
    </div>
  );
};

export default Stats;

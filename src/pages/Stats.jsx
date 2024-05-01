import React from "react";
import { Typography, Progress } from "antd";
import AreaChartComponent from "../components/AreaChart";
const { Text } = Typography;

const Stats = () => {
  const totalVoters = 100;
  const votedVoters = 75;

  const voterTurnoutPercentage = (votedVoters / totalVoters) * 100;

  const data = [
    { date: "2024-04-01", maleVotes: 50, femaleVotes: 15 },
    { date: "2024-04-02", maleVotes: 20, femaleVotes: 30 },
    { date: "2024-04-03", maleVotes: 30, femaleVotes: 42 },
    { date: "2024-04-03", maleVotes: 10, femaleVotes: 23 },
    { date: "2024-04-03", maleVotes: 45, femaleVotes: 5 },
    { date: "2024-04-03", maleVotes: 22, femaleVotes: 11 },
    { date: "2024-04-03", maleVotes: 3, femaleVotes: 2 },

    // Add more data points as needed
  ];
  return (
    <div>
      <Text className="text-primary-500 text-[20px]" strong>
        Election Statistics
      </Text>
      <div className="grid grid-cols-2 md:grid-cols-3 mt-[20px] gap-[5px] md:gap-[20px] xl:gap-[50px] lg:px-[30px]">
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
            format={() => totalVoters}
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
            percent={(votedVoters / totalVoters) * 100}
            format={() => votedVoters}
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
        <AreaChartComponent data={data} />
      </div>
    </div>
  );
};

export default Stats;

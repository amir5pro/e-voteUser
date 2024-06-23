import React, { useState } from "react";
import { Badge, Carousel, ConfigProvider } from "antd";
import { Typography, Progress } from "antd";
import BarChartComponent from "../components/BarChart";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";

const { Text } = Typography;

export const loader = async () => {
  try {
    const { data } = await customFetch("/student/result");

    return data;
  } catch (error) {
    return null;
  }
};

const Results = () => {
  const loaderData = useLoaderData();
  const { data, totalVotes } = loaderData || {};

  if (!data || !totalVotes || data.length === 0) {
    return (
      <div className="h-full  flex items-center justify-center">
        <Text className="text-[20px]">No results are available!</Text>
      </div>
    );
  }

  const resultData = Object.values(data);
  resultData.sort((a, b) => b.Votes - a.Votes); // Sort candidates by votes in descending order

  const topBadges = [
    "🏆 President",
    "🥈 Vice President",
    "🥉 Secretary",
    "🏅 Vice Secretary",
  ];
  return (
    <div>
      <Text className="text-primary-500 text-[20px]" strong>
        Results
      </Text>

      <div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] px-[6px] md:gap-[50px] md:px-[30px] py-[20px]">
            {resultData.map((candidate, index) => {
              const { name, Votes, studentDetails } = candidate;
              const percentage = ((Votes / totalVotes) * 100).toFixed(0);
              const position = index + 1;

              return (
                <div
                  key={index}
                  className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white shadow-lg rounded-2xl p-[7px]"
                >
                  {position <= 4 && Votes > 0 && (
                    <Badge
                      count={topBadges[position - 1]}
                      style={{ backgroundColor: "#52c41a" }}
                    />
                  )}
                  <Progress
                    type="circle"
                    steps={10}
                    percent={percentage}
                    trailColor="rgba(0, 0, 0, 0.06)"
                    strokeWidth={20}
                    strokeColor="#191e67"
                  />
                  <Text>{name}</Text>
                  <Text>ID : {studentDetails}</Text>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {" "}
          <BarChartComponent data={resultData} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Results;

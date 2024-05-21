import React, { useState } from "react";
import { Carousel, ConfigProvider } from "antd";
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
  const [dotPosition, setDotPosition] = useState("top");
  const loaderData = useLoaderData();
  const { data, totalVotes } = loaderData || {};
  const resultData = Object.values(data);

  if (!data || !totalVotes || data.length === 0) {
    return <Text>No results are available!</Text>;
  }

  return (
    <div>
      <Text className="text-primary-500 text-[20px]" strong>
        Results
      </Text>

      <div>
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] px-[6px] md:gap-[50px] md:px-[30px] py-[20px]">
            {resultData.map((candidate, index) => {
              const { name, Votes } = candidate;
              const percentage = ((Votes / totalVotes) * 100).toFixed(1);

              return (
                <div
                  key={index}
                  className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white shadow-lg rounded-2xl p-[7px]"
                >
                  <Progress
                    type="circle"
                    steps={10}
                    percent={percentage}
                    trailColor="rgba(0, 0, 0, 0.06)"
                    strokeWidth={20}
                    strokeColor="#191e67"
                  />
                  <Text>{name}</Text>
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

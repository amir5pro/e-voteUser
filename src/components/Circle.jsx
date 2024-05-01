import React from "react";
import { Progress, Typography } from "antd";
const { Text } = Typography;
const Circle = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[15px] px-[6px] md:gap-[50px] md:px-[30px] py-[20px]">
      <div
        className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[7px]"
      >
        <Progress
          type="circle"
          steps={10}
          percent={82}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
          strokeColor="#191e67"
        />
        <Text>Candidate 1</Text>
      </div>
      <div
        className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[7px]"
      >
        <Progress
          type="circle"
          steps={8}
          percent={43}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
          strokeColor="#242f9c"
        />
        <Text>Candidate 1</Text>
      </div>
      <div
        className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[7px]"
      >
        <Progress
          type="circle"
          steps={8}
          percent={24}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeWidth={20}
          strokeColor="#2851ff"
        />
        <Text>Candidate 1</Text>
      </div>
      <div
        className="flex flex-col gap-[10px] border-b-primary-500 border-b-[5px] border border-gray-200  bg-white 
         shadow-lg rounded-2xl p-[7px]"
      >
        <Progress
          type="circle"
          steps={8}
          percent={20}
          trailColor="rgba(0, 0, 0, 0.06)"
          strokeColor="#8296ff"
          strokeWidth={20}
        />
        <Text>Candidate 1</Text>
      </div>
    </div>
  );
};

export default Circle;

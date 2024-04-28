import React from "react";
import { Progress, Typography } from "antd";
const { Text } = Typography;
const Circle = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 place-items-center py-[20px]">
      <div className="flex flex-col gap-[10px]">
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
      <div className="flex flex-col gap-[10px]">
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
      <div className="flex flex-col gap-[10px]">
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
      <div className="flex flex-col gap-[10px]">
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

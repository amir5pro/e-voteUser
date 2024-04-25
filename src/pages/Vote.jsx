import React from "react";
import { Typography, Button } from "antd";
import Cards from "../components/Cards";
const { Text } = Typography;
const Vote = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center">
          <Text className="text-primary-500 text-[25px] mb-[15px]" strong>
            You may now cast your vote!
          </Text>
          <Text className="text-primary-500 text-[20px]" strong>
            Student Union President
          </Text>
          <Text>You can only vote for one candidate</Text>
        </div>
        <div className="grid gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3  2xl:grid-cols-4 py-[15px]  place-items-center">
          <Cards />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex flex-col items-center">
          <Text className="text-primary-500 text-[20px]" strong>
            Student Union Vice President
          </Text>
          <Text>You can only vote for one candidate</Text>
        </div>
        <div className="grid  gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-[15px]  place-items-center">
          <Cards />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex flex-col items-center">
          <Text className="text-primary-500 text-[20px]" strong>
            Student Union Secretary
          </Text>
          <Text>You can only vote for one candidate</Text>
        </div>
        <div className="grid  gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-[15px]  place-items-center">
          <Cards />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="flex flex-col items-center">
          <Text className="text-primary-500 text-[20px]" strong>
            Student Union Vice Secretary
          </Text>
          <Text>You can only vote for one candidate</Text>
        </div>
        <div className="grid  gap-[25px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 py-[15px]  place-items-center">
          <Cards />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Text>Double check your choices before submitting your votes </Text>
        <Button type="primary" shape="round" className="w-[100px]">
          Submit{" "}
        </Button>
      </div>
    </div>
  );
};

export default Vote;

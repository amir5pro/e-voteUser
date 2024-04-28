import React, { useState } from "react";
import { Select, Spin, Typography, Checkbox } from "antd";

const { Text } = Typography;
const Prevotecards = () => {
  const [options, setOptions] = useState([
    {
      value: "jack ",
      label: "Jack ",
    },
    {
      value: "lucy",
      label: "Lucy",
    },
    {
      value: "Yiminghe",
      label: "yiminghe",
    },
    {
      value: "jack1",
      label: "Jack1",
    },
    {
      value: "lucy1",
      label: "Lucy1",
    },
    {
      value: "Yiminghe1",
      label: "yiminghe1",
    },
  ]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-[25px]">
      <div
        className=" w-[300px] md:w-[370px]  xl:w-[500px] 2xl:w-[600px] shadow-xl h-[fit-content] min-h-[200px] flex flex-col justify-center
      rounded-2xl p-[15px] bg-white border border-gray-200"
      >
        <div className="flex flex-col items-center gap-[7px]">
          <Text className="text-primary-500 text-[20px]" strong>
            Candidates for Student Union President position
          </Text>
          <Text type="secondary">You can only Select 4 candidates</Text>
        </div>
        <div className="flex gap-3 justify-center my-[20px]">
          <div>
            <Select
              options={options}
              mode="multiple"
              maxCount={5}
              className="w-[200px] md:w-[250px] xl:w-[300px]"
            />
          </div>
          <Checkbox />
        </div>
      </div>
      <div
        className=" w-[300px] md:w-[370px]  xl:w-[500px] 2xl:w-[600px] shadow-xl h-[fit-content] min-h-[200px] flex flex-col justify-center
       rounded-2xl p-[15px] bg-white border border-gray-200"
      >
        <div className="flex flex-col items-center gap-[7px]">
          <Text className="text-primary-500 text-[20px]" strong>
            Candidates for Student Union vice President position
          </Text>
          <Text type="secondary">You can only Select 4 candidates</Text>
        </div>
        <div className="flex gap-3 justify-center my-[20px]">
          <div>
            <Select
              options={options}
              mode="multiple"
              maxCount={5}
              className="w-[200px] md:w-[250px] xl:w-[300px]"
            />
          </div>
          <Checkbox />
        </div>
      </div>
      <div
        className=" w-[300px] md:w-[370px]  xl:w-[500px] 2xl:w-[600px] shadow-xl h-[fit-content] min-h-[200px] flex flex-col justify-center
      rounded-2xl p-[15px] bg-white border border-gray-200"
      >
        <div className="flex flex-col items-center gap-[7px]">
          <Text className="text-primary-500 text-[20px]" strong>
            Candidates for Student Union secretary position
          </Text>
          <Text type="secondary">You can only Select 4 candidates</Text>
        </div>
        <div className="flex gap-3 justify-center my-[20px]">
          <div>
            <Select
              options={options}
              mode="multiple"
              maxCount={5}
              className="w-[200px] md:w-[250px] xl:w-[300px]"
            />
          </div>
          <Checkbox />
        </div>
      </div>
      <div
        className=" w-[300px] md:w-[370px]  xl:w-[500px] 2xl:w-[600px] shadow-xl h-[fit-content] min-h-[200px] flex flex-col justify-center
      rounded-2xl p-[15px] bg-white border border-gray-200"
      >
        <div className="flex flex-col items-center gap-[7px]">
          <Text className="text-primary-500 text-[20px]" strong>
            Candidates for Student Union vice secretary position
          </Text>
          <Text type="secondary">You can only Select 4 candidates</Text>
        </div>
        <div className="flex gap-3 justify-center my-[20px]">
          <div>
            <Select
              options={options}
              mode="multiple"
              maxCount={5}
              className="w-[200px] md:w-[250px] xl:w-[300px]"
            />
          </div>
          <Checkbox />
        </div>
      </div>
    </div>
  );
};

export default Prevotecards;

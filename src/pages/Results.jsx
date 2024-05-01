import React, { useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import { Typography } from "antd";
import BarChartComponent from "../components/BarChart";
import Circle from "../components/Circle";

const { Text } = Typography;

const Results = () => {
  const [dotPosition, setDotPosition] = useState("top");

  const data = [
    { candidate: "Candidate 1", votes: 200 },
    { candidate: "Candidate 2", votes: 30 },
    { candidate: "Candidate 3", votes: 45 },
    { candidate: "Candidate 4", votes: 60 },
  ];

  return (
    <div>
      <Text className="text-primary-500 text-[20px]" strong>
        Live Results
      </Text>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#242f9c",
          },
          components: {
            Carousel: {
              dotHeight: 5,
              dotWidth: 24,
              dotActiveWidth: 60,
            },
          },
        }}
      >
        <Carousel
          dotPosition={dotPosition}
          colorBgContainer="#242f9c"
          className="py-[40px] "
        >
          <div>
            <Text className=" text-[20px]">Student Union President</Text>
            <div>
              <Circle />
            </div>
            <div>
              <BarChartComponent data={data} />
            </div>
          </div>
          <div>
            <Text className=" text-[20px]">Student Union Vice President</Text>
            <div>
              <Circle />
            </div>
            <div>
              <BarChartComponent data={data} />
            </div>
          </div>
          <div>
            <Text className=" text-[20px]">Student Union Secretary</Text>
            <div>
              <Circle />
            </div>
            <div>
              <BarChartComponent data={data} />
            </div>
          </div>
          <div>
            <Text className=" text-[20px]">Student Union Vice Secretary</Text>
            <div>
              <Circle />
            </div>
            <div>
              <BarChartComponent data={data} />
            </div>
          </div>
        </Carousel>
      </ConfigProvider>
    </div>
  );
};

export default Results;

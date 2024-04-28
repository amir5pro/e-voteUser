import React, { useMemo, useRef, useState } from "react";
import { Select, Spin, Typography, Button } from "antd";
import Prevotecards from "../components/Prevotecards";

const { Text } = Typography;
const Prevote = () => {
  return (
    <>
      <div className="flex flex-col gap-3 mb-[30px]">
        <Text className="text-primary-500 text-[20px]" strong>
          Welcome to Preliminary Voting!
        </Text>
        <Text>
          Choose your candidates! Cast your preliminary vote now to select the
          candidates that will compete in the election.
        </Text>
      </div>
      <div className=" ">
        <Prevotecards />
      </div>
      <div className="flex flex-col items-center gap-3 mt-[30px]">
        <Text>Double check your choices before submitting your votes </Text>
        <Button type="primary" shape="round" className="w-[100px]">
          Submit{" "}
        </Button>
      </div>
    </>
  );
};

export default Prevote;

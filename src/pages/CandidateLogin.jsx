import React, { useState } from "react";
import wave from "../assets/svg.png";
import wavetwo from "../assets/svgtwo.png";
import { Button, Form, Input, Typography } from "antd";
import hulogo from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
const { Text } = Typography;

const CandidateLogin = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await customFetch.post("/candidate/login", values);
      toast.success(" successfully logged in");
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden ">
      <div className=" w-[200px] h-screen relative   hidden md:block">
        <img src={wave} className="h-full  absolute top-0 left-0-0" />
      </div>
      <div className="w-full h-[200px] block md:hidden">
        <img src={wavetwo} />
      </div>
      <div className="flex-1 px-[30px] md:px-0 md:pt-[60px]">
        <div className="flex items-center justify-center gap-4">
          <img
            src={hulogo}
            className="w-[60px] h-[60px] md:w-[75px] md:h-[75px]"
          />
          <Text
            className="text-primary-500 text-[25px] md:text-[35px] lg:text-[50px]"
            strong
          >
            HU Daye Campus
          </Text>
        </div>

        <div className="flex items-center justify-center">
          <Text className="text-primary-500 text-[23px] md:text-[30px] mb-9 mt-2">
            Candidate Login
          </Text>
        </div>

        <div className="max-w-[400px] m-auto flex flex-col">
          <Form
            name="basic"
            layout="vertical"
            style={{
              maxWidth: 400,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="student ID"
              name="studentId"
              rules={[
                {
                  required: true,
                  message: "Please input your ID!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="  h-[35px] w-[200px] px-[13px] "
                loading={loading}
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <Link to="/" className="text-center">
            <Text className=" text-primary-500 hover:opacity-75" strong>
              Back to Home
            </Text>
          </Link>
        </div>
      </div>
      <div className=" w-[200px] h-screen relative hidden md:block">
        <img
          src={wave}
          className=" transform rotate-180 h-full absolute top-0 right-0"
        />
      </div>
      <div className="w-full h-[200px] block md:hidden transform rotate-180">
        <img src={wavetwo} />
      </div>
    </div>
  );
};

export default CandidateLogin;

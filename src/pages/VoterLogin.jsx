import React, { useState } from "react";
import wave from "../assets/svg.png";
import wavetwo from "../assets/svgtwo.png";
import { Button, Form, Input, Typography } from "antd";
import hulogo from "../assets/image.png";
import { Link, useNavigate } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const { Text } = Typography;

const VoterLogin = () => {
  const [loading, setLoading] = useState(false);
  const oneDay = 1000 * 60 * 60 * 24;

  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await customFetch.post("/student/login", values);
      Cookies.set("token", data.dataToken, {
        expires: new Date(Date.now() + oneDay),
      });

      navigate("/dashboard");
      toast.success(" successfully logged in");
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
          <div className="flex flex-col items-center mb-6 mt-2 gap-3">
            {" "}
            <Text
              className="text-primary-500 text-[23px] md:text-[30px] "
              strong
            >
              Voter Login
            </Text>
            <Text className=" text-center  max-w-[400px]">
              Welcome back! please login to vote for your preferred candidate.
            </Text>
          </div>
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
          <Text className="text-center">
            Don't have an account ?{" "}
            <Link to="../voterRegister">
              <Text className="text-primary-500 hover:opacity-75" strong>
                Register here
              </Text>
            </Link>
          </Text>
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

export default VoterLogin;

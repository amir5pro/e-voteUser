import React, { useEffect, useState } from "react";

import { Button, Form, Input, Typography, DatePicker } from "antd";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const { RangePicker } = DatePicker;

const MainVoteDate = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    const { RangePicker } = values;
    const startDate =
      RangePicker[0].$y +
      "-" +
      String(RangePicker[0].$M + 1).padStart(2, "0") +
      "-" +
      String(RangePicker[0].$D).padStart(2, "0");
    const endDate =
      RangePicker[1].$y +
      "-" +
      String(RangePicker[1].$M + 1).padStart(2, "0") +
      "-" +
      String(RangePicker[1].$D).padStart(2, "0");

    const dateRangeObject = {
      start: startDate,
      end: endDate,
    };

    setLoading(true);
    try {
      await customFetch.post("/admin/mainVotingDate", dateRangeObject);
      toast.success(" successfully added main voting date");
      setLoading(false);
      form.resetFields();
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="flex items-center gap-[25px] ">
      <Form
        name="MainVotingForm"
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
        form={form}
      >
        <Form.Item
          label="main voting date"
          name="RangePicker"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-[150px]"
          >
            set
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MainVoteDate;

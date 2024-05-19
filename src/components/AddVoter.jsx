import React, { useState } from "react";

import { Button, Modal, Form, Input, Select } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
const { Option } = Select;
const AddVoter = ({ addVoterOpen, setAddVoterOpen }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await customFetch.post("/admin/student", values);
      toast.success(" successfully added voter");
      setAddVoterOpen(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.msg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Modal
        open={addVoterOpen}
        title="Add Voter"
        onCancel={() => {
          setAddVoterOpen(false);
          setLoading(false);
        }}
        footer={null}
      >
        <div>
          <Form
            layout="vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{
              maxWidth: 420,
            }}
            key={loading}
          >
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input name",
                },
              ]}
            >
              <Input />
            </Form.Item>
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
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default AddVoter;

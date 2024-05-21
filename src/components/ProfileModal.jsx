import React, { useState } from "react";

import { Button, Modal, Form, Input } from "antd";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const ProfileModal = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      await customFetch.post("/candidate/addInfo", values);
      toast.success(" successfully added information");
      setOpen(false);
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
        open={open}
        title="Title"
        onCancel={() => {
          setOpen(false);
          setLoading(false);
        }}
        footer={null}
      >
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "The input is not a valid email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "please input your Phone Number",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Age"
              label="Age"
              rules={[
                {
                  required: true,
                  message: "please input your age",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Department"
              label="Department"
              rules={[
                {
                  required: true,
                  message: "Please enter your Department",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="Campaign"
              label="Campaign"
              rules={[
                {
                  required: true,
                  message: "Please list out your plans",
                },
              ]}
            >
              <Input.TextArea />
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

export default ProfileModal;

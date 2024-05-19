import React, { useState } from "react";

import { Button, Modal, Form, Input } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const ChangePassword = ({ passwordOpen, setPasswordOpen }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await customFetch.patch("/admin/update-info", values);
      toast.success(" successfully changed password");
      setPasswordOpen(false);
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
        open={passwordOpen}
        title="Change password"
        onCancel={() => {
          setPasswordOpen(false);
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

export default ChangePassword;

import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";

import { Avatar, Modal, Typography } from "antd";
const { Text } = Typography;
const DetailsModal = ({
  detailsOpen,
  setDetailsOpen,
  selectedCandidateDetails,
}) => {
  let name = "";
  let Department = "";
  let Age = "";
  let email = "";
  let Campaign = "";
  let phone = "";
  let avatar = "";
  if (selectedCandidateDetails) {
    ({ name, Department, Age, email, Campaign, phone, avatar } =
      selectedCandidateDetails);
  }

  return (
    <div>
      <Modal
        open={detailsOpen}
        title="Details"
        onCancel={() => {
          setDetailsOpen(false);
        }}
        footer={null}
      >
        <div>
          <div className="flex flex-start gap-[15px]">
            {" "}
            <Avatar
              size={120}
              icon={avatar ? null : <UserOutlined />}
              src={avatar}
              className=" border-2 border-white object-contain"
            />
            <div className="flex flex-col gap-3 items-start">
              <div>
                {" "}
                <Text strong>Name:</Text>
                <Text> {name ? name : "Info not added"}</Text>
              </div>
              <div>
                <Text strong> Department:</Text>
                <Text> {Department ? Department : "Info Not added"}</Text>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-start gap-[20px] mt-[30px]">
            <div>
              <Text strong>Age:</Text>
              <Text> {Age ? Age : "Info Not added"}</Text>
            </div>
            <div>
              <Text strong>Email:</Text>{" "}
              <Text> {email ? email : "Info Not added"}</Text>
            </div>
          </div>
          <div className="flex items-center gap-1  mt-[30px]">
            <Text strong>Phone:</Text>
            <Text> {phone ? phone : "Info Not added"}</Text>
          </div>
          <div className="flex flex-col mt-[30px]">
            <Text strong>Campaign</Text>
            <Text> {Campaign ? Campaign : "Info Not added"}</Text>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;

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
  if (selectedCandidateDetails) {
    ({ name, Department, Age, email, Campaign, phone } =
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
        <div className="flex items-start gap-[20px]">
          <Avatar
            size={120}
            icon={<UserOutlined />}
            className=" border-2 border-white object-contain"
          />
          <div className="flex flex-col gap-3 items-start">
            <Text strong>{name ? name : "Info not added"}</Text>
            <Text> {Department ? Department : "Info Not added"}</Text>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Text strong>{Age ? Age : "Info Not added"}</Text>
            <Text> {email ? email : "Info Not added"}</Text>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <Text strong>{phone ? phone : "Info Not added"}</Text>
            <Text> {Campaign ? Campaign : "Info Not added"}</Text>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DetailsModal;

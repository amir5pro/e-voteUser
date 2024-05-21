import React, { useState } from "react";

import { Button, Modal, Form, Input, Select } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const DatesModal = ({ setOpenDates, openDates }) => {
  return (
    <div>
      <div>
        <Modal
          open={openDates}
          title="Dates"
          onCancel={() => {
            setOpenDates(false);
          }}
          footer={null}
        ></Modal>
      </div>
    </div>
  );
};

export default DatesModal;

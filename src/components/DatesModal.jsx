import React, { useEffect, useState } from "react";

import { Button, Modal, Form, Input, Select, Typography } from "antd";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const { Text } = Typography;

const DatesModal = ({ setOpenDates, openDates }) => {
  const [datesData, setDatesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await customFetch("/user/dates");
        const { dates } = response.data;
        setDatesData(dates);
      } catch (error) {}
    };

    fetchData();
  }, []);

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
        >
          {datesData && datesData.length > 0 ? (
            datesData.map((date) => (
              <div key={date._id} className="mt-[20px]">
                <Text strong>{date.name}:</Text> {date.start.slice(0, 10)} -{" "}
                {date.end.slice(0, 10)}
              </div>
            ))
          ) : (
            <div>No dates are available.</div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default DatesModal;

import { Radio, Space, Typography } from "antd";
import React from "react";

const { Title } = Typography;

const Checklist = ({ title, items, selected, assetCounts, onChange }) => {
  console.log(items[0]);
  return (
    <Radio.Group onChange={onChange} value={selected}>
      <Space direction="vertical" align="start">
        <Title level={2}>{title}</Title>
        {items.map((item) => (
          <Radio
            style={{ width: "100%", padding: "4px", fontSize: "18px" }}
            value={item}
            disabled={assetCounts[item] >= 12}
          >
            <span
              style={
                assetCounts[item] === 0
                  ? { color: "red" }
                  : assetCounts[item] === 1
                  ? { color: "#FAC51C" }
                  : assetCounts[item] <= 3
                  ? { color: "#9365B8" }
                  : assetCounts[item] <= 6
                  ? { color: "#2C82C9" }
                  : assetCounts[item] <= 8
                  ? { color: "#41A85F" }
                  : { color: "#D1D5D8" }
              }
            >
              <b>{assetCounts[item]}</b>
            </span>{" "}
            {item.match(/\/static\/media\/(.*)\.(.*)\.png/)[1]}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Checklist;

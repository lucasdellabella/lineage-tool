import { AutoComplete, Radio, Space, Typography } from "antd";
import React from "react";
import { extractName } from "./utils";

const { Title } = Typography;
const LockOverlay = ({ locked, onClick }) => {
  if (!locked) return null;
  return (
    <div
      onClick={onClick}
      className="lock-overlay"
      style={{
        zIndex: 10,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: "auto",
        right: 0,
        minHeight: "100%",
        backgroundColor: "gray",
        opacity: 0.2,
        cursor: "pointer",
      }}
    />
  );
};

const Checklist = ({
  title,
  items,
  selected,
  assetCounts,
  onChange,
  toggleLockOverlay,
  locked,
}) => {
  const color = (item) => {
    return assetCounts[item] === 0
      ? { color: "red" }
      : assetCounts[item] === 1
      ? { color: "#FAC51C" }
      : assetCounts[item] <= 3
      ? { color: "#9365B8" }
      : assetCounts[item] <= 6
      ? { color: "#2C82C9" }
      : assetCounts[item] <= 8
      ? { color: "#41A85F" }
      : { color: "#D1D5D8" };
  };
  return (
    <Radio.Group onChange={onChange} value={selected}>
      <Space
        direction="vertical"
        align="start"
        style={{ position: "relative" }}
      >
        <LockOverlay locked={locked} onClick={toggleLockOverlay} />
        <Title
          level={2}
          onClick={toggleLockOverlay}
          style={{ cursor: "pointer" }}
        >
          {title} {locked && "🔒"}
        </Title>
        <Title level={4}>
          {
            <span style={color(parseInt(assetCounts[selected]))}>
              {assetCounts[selected]}
            </span>
          }{" "}
          {extractName(selected)}
        </Title>
        {items.map((item, i) => (
          <Radio
            style={{ width: "100%", padding: "4px", fontSize: "18px" }}
            value={item}
            disabled={assetCounts[item] >= 12}
            key={i}
          >
            <span style={color(item)}>
              <b>{assetCounts[item]}</b>
            </span>{" "}
            {item.match(/\/static\/media\/(.*)\.(.*)\.png/)[1]}
            {/* {item} */}
          </Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Checklist;

import { Radio, Space, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const Checklist = ({ title, items, selected, onChange }) => {
  return (
    <Radio.Group onChange={onChange} value={selected}>
      <Space direction="vertical" align="start">
        <Title level={2}>{title}</Title>
        {items.map((item) => (
          <Radio style={{width: '100%'}} value={item}>{item.match(/\/static\/media\/(.*)\.(.*)\.png/)[1]}</Radio>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default Checklist;
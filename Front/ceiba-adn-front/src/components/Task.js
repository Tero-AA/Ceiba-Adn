import React from 'react';
import 'antd/dist/antd.css';
import { Card, Tag } from 'antd';

const TaskStyle = {
  marginTop: '10px',
};

const Task = ({ taskName, pay, status }) => {
  return (
    <Card style={TaskStyle} title={taskName} type="inner">
      On time Payment: <Tag color="#87d068">${pay}</Tag>
      <br />
      <br />
      Status: <Tag color="#f50">{status}</Tag>
    </Card>
  );
};

export default Task;

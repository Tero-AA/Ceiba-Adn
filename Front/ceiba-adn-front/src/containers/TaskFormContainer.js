import React from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import TaskForm from '../components/TaskForm';

let CardStyle = {
  maxWidth: '85%',
  margin: '30px auto',
};

function TaskFormContainer() {
  return (
    <Card style={CardStyle}>
      <TaskForm></TaskForm>
    </Card>
  );
}

export default TaskFormContainer;

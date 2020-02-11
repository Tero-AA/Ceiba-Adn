import React from 'react';
import 'antd/dist/antd.css';
import { Collapse } from 'antd';
import TaskForm from '../components/TaskForm';

const { Panel } = Collapse;

const CardStyle = {
  maxWidth: '90%',
  margin: '50px auto',
};

function TaskFormContainer() {
  return (
    <Collapse style={CardStyle}>
      <Panel header="Create New Task">
        <TaskForm></TaskForm>
      </Panel>
    </Collapse>
  );
}

export default TaskFormContainer;

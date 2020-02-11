import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, DatePicker, Form, Button } from 'antd';
import { postTask } from '../utils/api';

let moment = require('moment');
const { TextArea } = Input;

function TaskForm() {
  const [values, setValues] = useState({
    taskTame: '',
    pay: '',
    taskDescription: '',
  });
  const [taskDueDate, setTaskDueDate] = useState('2020-02-10');

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const dueDateChange = dateString => {
    const date = moment(dateString);
    console.log(date);

    setTaskDueDate(date);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let { taskName, pay, taskDescription } = values;
    let number = Number(pay);

    let data = {
      taskName: taskName,
      pay: number,
      taskDescription: taskDescription,
      taskDueDate: taskDueDate,
    };

    postTask(data)
      .then(res => console.log(res.data))
      .catch(error => console.log(error, error.message));

    window.location.reload(false);
  };

  return (
    <Form onSubmit={handleSubmit} layout="vertical">
      <Form.Item label="Task Name">
        <Input
          name="taskName"
          value={values.taskName}
          placeholder="Enter the task title"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Task Payment">
        <Input
          name="pay"
          value={values.pay}
          placeholder="Enter the Payment for this Task"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Task Description">
        <TextArea
          rows="3"
          name="taskDescription"
          value={values.taskDescription}
          placeholder="Enter the Task description"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Task Name">
        <DatePicker onChange={dueDateChange} />
      </Form.Item>
      <Button onClick={handleSubmit} type="primary">
        Submit
      </Button>
    </Form>
  );
}

export default TaskForm;

import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Input, DatePicker, Form } from 'antd';

const { TextArea } = Input;

function TaskForm() {
  const [values, setValues] = useState({
    taskTame: '',
    pay: '',
    taskDescription: '',
  });
  const [taskDueDate, setTaskDueDate] = useState({ dateString: '2020-02-11' });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  function onChange(dateString) {
    setTaskDueDate(dateString);
    console.log(taskDueDate);
  }

  return (
    <Form layout="vertical">
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
          placeholder="enter the Task description"
          onChange={handleChange}
        />
      </Form.Item>
      <Form.Item label="Task Name">
        <DatePicker onChange={onChange} />
      </Form.Item>
    </Form>
  );
}

export default TaskForm;

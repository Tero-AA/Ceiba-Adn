import React, { useState, useEffect, Fragment } from 'react';
import 'antd/dist/antd.css';
import { Card, Button, Modal, Tag } from 'antd';
import { getTasks, getTask, deleteTask, completeTask } from '../utils/api';
import Task from '../components/Task';

let moment = require('moment');

const TasksStyle = {
  maxWidth: '90%',
  margin: '50px auto',
};

const ButtonStyle = {
  margin: '10px 10px 0px 0',
};

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [modalData, setModalData] = useState({
    taskName: 'Loading ...',
    taskDescription: 'Loading ...',
    status: 'Loading ...',
    taskDueDate: 'Loading ...',
    taskCreationDate: 'Loading ...',
    pay: 'Loading ...',
  });
  const [modalData2, setModalData2] = useState({
    taskName: 'Loading ...',
    taskDescription: 'Loading ...',
    status: 'Loading ...',
    taskDueDate: 'Loading ...',
    taskCreationDate: 'Loading ...',
    pay: 'Loading ...',
    taskCompletionDate: 'Loading ...',
  });

  useEffect(() => {
    getTasks()
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  const handleOk = e => {
    e.preventDefault();
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };
  const handleOk2 = e => {
    e.preventDefault();
    setVisible2(false);
  };

  const handleCancel2 = e => {
    setVisible2(false);
  };

  const handleMore = e => {
    e.preventDefault();
    const { name } = e.target;
    setVisible(true);
    getTask(name)
      .then(res => {
        const data = res.data;
        setModalData(data);
      })
      .catch(error => console.log(error, error.message));
  };

  const handleEliminate = e => {
    e.preventDefault();
    const { name } = e.target;
    deleteTask(name)
      .then(res => {
        console.log(res.data);
        getTasks()
          .then(res => {
            setTasks(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const handleComplete = e => {
    e.preventDefault();
    const { name, pay } = e.target;
    let date = Date.now;

    let data = {
      status: 'Done',
      taskCompletionDate: date,
      pay: pay,
    };

    setVisible2(true);
    completeTask(name, data)
      .then(res => {
        const data = res.data;
        setModalData2(data);
        getTasks()
          .then(res => {
            setTasks(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const renderTasks = () => {
    return tasks.map(task => {
      const { taskName, id, pay, status } = task;

      return (
        <div key={id}>
          <Task taskName={taskName} pay={pay} status={status}></Task>
          <Button
            name={id}
            onClick={handleMore}
            style={ButtonStyle}
            type="primary"
          >
            More Information
          </Button>
          <Button
            onClick={handleComplete}
            name={id}
            pay={pay}
            style={ButtonStyle}
            type="dashed"
          >
            Complete Task
          </Button>
          <Button
            name={id}
            onClick={handleEliminate}
            style={ButtonStyle}
            type="danger"
          >
            Eliminate
          </Button>
        </div>
      );
    });
  };

  return (
    <Fragment>
      <Card style={TasksStyle} title="Tasks">
        {loading ? 'loading' : renderTasks()}
      </Card>
      <Modal
        id="modal"
        title={modalData.taskName}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Description: <br />
        <br />
        {modalData.taskDescription} <br />
        <br />
        Status: <Tag color="#f50">{modalData.status}</Tag> <br />
        <br />
        Due Date: {moment(modalData.taskDueDate).format('YYYY-MM-DD')} <br />
        <br />
        Creation Date: {moment(modalData.taskCreationDate).format('YYYY-MM-DD')}
        <br />
        <br />
        Payment: <Tag color="#87d068">${modalData.pay}</Tag> <br />
        <br />
      </Modal>
      <Modal
        title={modalData2.taskName}
        visible={visible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <br />
        Completion Date:{' '}
        {moment(modalData2.taskCompletionDate).format('YYYY-MM-DD')}
        <br />
        <br />
        Payment: <Tag color="#87d068">${modalData2.pay}</Tag> <br />
        <br />
        <br />
        Status: <Tag color="#f50">{modalData2.status}</Tag> <br />
        <br />
        Description: <br />
        <br />
        {modalData2.taskDescription} <br />
        Due Date: {moment(modalData2.taskDueDate).format('YYYY-MM-DD')} <br />
        <br />
        Creation Date:{' '}
        {moment(modalData2.taskCreationDate).format('YYYY-MM-DD')}
        <br />
      </Modal>
    </Fragment>
  );
}

export default Tasks;

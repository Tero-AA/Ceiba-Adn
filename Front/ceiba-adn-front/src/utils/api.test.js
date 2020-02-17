import axios from 'axios';
import { getTask, getTasks, postTask, deleteTask, completeTask } from './api';

jest.mock('axios');

const data = {
  id: '5e496e554eb92c36c84e8391',
  taskName: 'Task Test',
  taskDescription: 'Test Description',
  status: 'To Do',
  taskDueDate: '2020-02-16T16:31:13.797Z',
  taskCreationDate: '2020-02-16T16:31:17.075Z',
  pay: 10,
};

describe('---API CRUD Services---', () => {
  it('getTask', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    expect(getTasks()).resolves.toEqual(data);
  });

  it('getTask', () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    expect(getTask(data.id)).resolves.toEqual(data);
  });

  it('postTask', () => {
    axios.post.mockImplementationOnce(() => Promise.resolve(data));

    expect(postTask(data)).resolves.toEqual(data);
  });

  it('deleteTask', () => {
    axios.delete.mockImplementationOnce(() => Promise.resolve(data));

    expect(deleteTask(data.id)).resolves.toEqual(data);
  });

  it('completeTask', () => {
    axios.put.mockImplementationOnce(() => Promise.resolve(data));

    expect(completeTask(data.id, data)).resolves.toEqual(data);
  });
});

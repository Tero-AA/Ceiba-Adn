import TaskDto from '../../../domain/dto/task.dto';
import TaskRepositoryMongo from './task.repository.mongo';
import { TestingModule, Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';

const task: TaskDto = {
  id: '5e39c3384caa9d380437f5cb',
  taskName: 'Tarea 5',
  taskDescription: 'Description',
  status: 'To Do',
  taskDueDate: new Date(),
  taskCreationDate: new Date(),
  taskCompletionDate: new Date(),
  pay: 18,
};

describe('Task.repository.mongo', () => {
  let repositoryMongo: TaskRepositoryMongo;

  const taskModel = {
    find: jest.fn().mockResolvedValue([task]),
    findById: jest.fn().mockResolvedValue(task),
    save: jest.fn().mockResolvedValue(task),
    findByIdAndUpdate: jest.fn().mockResolvedValue(task),
    findByIdAndDelete: jest.fn().mockResolvedValue(task),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskRepositoryMongo,
        {
          provide: getModelToken('Task'),
          useValue: taskModel,
        },
      ],
    }).compile();

    repositoryMongo = module.get<TaskRepositoryMongo>(TaskRepositoryMongo);
  });

  it('should return all the tasks', () => {
    expect(repositoryMongo.getAllTasks()).resolves.toEqual([task]);
  });

  it('should return one task', () => {
    expect(
      repositoryMongo.getTask('5e39c3384caa9d380437f5cb'),
    ).resolves.toEqual(task);
  });

  it('should create a task', () => {
    expect(repositoryMongo.createTask(task)).resolves.toStrictEqual(task);
  });

  it('should delete task', () => {
    expect(
      repositoryMongo.deleteTask('5e39c3384caa9d380437f5cb'),
    ).resolves.toEqual(task);
  });

  it('should update a task', () => {
    expect(
      repositoryMongo.updateTask('5e39c3384caa9d380437f5cb', task),
    ).resolves.toEqual(task);
  });
});

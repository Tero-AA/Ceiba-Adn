import { Test } from '@nestjs/testing';
import GetAllTasksUseCase from './getAllTasks.usecase';
import { TaskRepository } from '../../domain/ports/task.repository';

const mockTaskRepository = () => ({
  getAllTasks: jest.fn(),
});

describe('GetAllTasksUseCase', () => {
  let getAllTasksUseCase;
  let taskRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GetAllTasksUseCase,
        {
          provide: TaskRepository.getAllTasks(),
          useFactory: mockTaskRepository,
        },
      ],
    }).compile();

    getAllTasksUseCase = await module.get<GetAllTasksUseCase>(
      GetAllTasksUseCase
    );
    taskRepository =
      (await module.get) <
      TaskRepository.getAllTasks() >
      TaskRepository.getAllTasks();
  });

  describe('getTasks', () => {
    it('gets all the tasks from the repository', () => {
      expect(taskRepository).not.toHaveBeenCalled();
    });
  });
});

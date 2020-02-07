import TaskDto from "src/domain/dto/task.dto";
import { TaskService } from "../../domain/services/task.service";
import { TestingModule, Test } from "@nestjs/testing";

const task: TaskDto = {
  id: "5e39c3384caa9d380437f5cb",
  taskName: "Tarea 5",
  taskDescription: "Description",
  status: "To Do",
  taskDueDate: new Date(),
  taskCreationDate: new Date(),
  taskCompletionDate: new Date(),
  pay: 18
}

describe('createTaskUseCase Unit Test', () => {
  let service: TaskService;

  const eventModel = {
    getTask: jest.fn().mockResolvedValue(task)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: 'TaskRepository',
          useValue: eventModel,
        },
      ],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('createTask', () => {
    expect(service.getTask("5e39c3384caa9d380437f5cb")).resolves.toBe(task);
  })
}) 
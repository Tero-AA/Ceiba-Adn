import TaskDto from "src/domain/dto/task.dto";
import { TestingModule, Test } from "@nestjs/testing";
import GetTaskUseCase from "./getTask.usecase";

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

describe('GetTaskUseCase unit Test', () => {
  let useCase: GetTaskUseCase;

  const eventModel = {
    getTask: jest.fn().mockResolvedValue(task)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetTaskUseCase,
        {
          provide: 'TaskService',
          useValue: eventModel,
        },
      ],
    }).compile();

    useCase = module.get<GetTaskUseCase>(GetTaskUseCase);
  });

  it('createTask', () => {
    expect(useCase.handler("5e39c3384caa9d380437f5cb")).resolves.toBe(task);
  })
}) 
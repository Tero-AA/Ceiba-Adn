import TaskDto from "src/domain/dto/task.dto";
import { TestingModule, Test } from "@nestjs/testing";
import CreateTaskUseCase from "./createTask.usecase";

const task: TaskDto = {
  id: "5e39c3384caa9d380437f5cb",
  taskName: "Tarea 5",
  taskDescription: "Description",
  status: "To Do",
  taskDueDate: new Date(),
  taskCreationDate: new Date(),
  taskCompletionDate: new Date(),
  pay: 18
};

describe("CreateTaskUseCase unit Test", () => {
  let useCase: CreateTaskUseCase;

  const eventModel = {
    createTask: jest.fn().mockResolvedValue(task)
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateTaskUseCase,
        {
          provide: "TaskService",
          useValue: eventModel
        }
      ]
    }).compile();

    useCase = module.get<CreateTaskUseCase>(CreateTaskUseCase);
  });

  it("createTask", () => {
    expect(useCase.handler(task)).resolves.toBe(task);
  });
});

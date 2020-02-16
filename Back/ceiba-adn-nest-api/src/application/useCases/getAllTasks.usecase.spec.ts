import TaskDto from "src/domain/dto/task.dto";
import { TestingModule, Test } from "@nestjs/testing";
import GetAllTasksUseCase from "./getAllTasks.usecase";

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

describe("GetAllTaskUseCase unit Test", () => {
  let useCase: GetAllTasksUseCase;

  const eventModel = {
    getAllTasks: jest.fn().mockResolvedValue([task])
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllTasksUseCase,
        {
          provide: "TaskService",
          useValue: eventModel
        }
      ]
    }).compile();

    useCase = module.get<GetAllTasksUseCase>(GetAllTasksUseCase);
  });

  it("createTask", () => {
    expect(useCase.handler()).resolves.toStrictEqual([task]);
  });
});

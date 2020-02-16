import TaskDto from "src/domain/dto/task.dto";
import { TestingModule, Test } from "@nestjs/testing";
import DeleteTaskUseCase from "./deleteTask.usecase";

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

describe("DeleteTaskUseCase unit Test", () => {
  let useCase: DeleteTaskUseCase;

  const eventModel = {
    deleteTask: jest.fn().mockResolvedValue(task)
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteTaskUseCase,
        {
          provide: "TaskService",
          useValue: eventModel
        }
      ]
    }).compile();

    useCase = module.get<DeleteTaskUseCase>(DeleteTaskUseCase);
  });

  it("createTask", () => {
    expect(useCase.handler("5e39c3384caa9d380437f5cb")).resolves.toBe(task);
  });
});

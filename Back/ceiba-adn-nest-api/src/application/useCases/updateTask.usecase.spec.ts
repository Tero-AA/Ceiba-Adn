import TaskDto from "src/domain/dto/task.dto";
import { TestingModule, Test } from "@nestjs/testing";
import UpdateTaskUseCase from "./updateTask.usecase";

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

describe("UpdateTaskUseCase unit Test", () => {
  let useCase: UpdateTaskUseCase;

  const eventModel = {
    updateTask: jest.fn().mockResolvedValue(task)
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateTaskUseCase,
        {
          provide: "TaskService",
          useValue: eventModel
        }
      ]
    }).compile();

    useCase = module.get<UpdateTaskUseCase>(UpdateTaskUseCase);
  });

  it("createTask", () => {
    expect(useCase.handler("5e39c3384caa9d380437f5cb", task)).resolves.toBe(
      task
    );
  });
});

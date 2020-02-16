import TaskDto from "../dto/task.dto";
import { TaskService } from "./task.service";
import { Test, TestingModule } from "@nestjs/testing";

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

describe("Task Service Unit Testing", () => {
  let service: TaskService;

  const eventModel = {
    getAllTasks: jest.fn().mockResolvedValue([task]),
    getTask: jest.fn().mockResolvedValue(task),
    createTask: jest.fn().mockResolvedValue(task),
    deleteTask: jest.fn().mockResolvedValue(task),
    updateTask: jest.fn().mockResolvedValue(task)
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TaskService,
        {
          provide: "TaskRepository",
          useValue: eventModel
        }
      ]
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it("getAllTask", () => {
    expect(service.getAllTasks()).resolves.toStrictEqual([task]);
  });

  it("getTask", () => {
    expect(service.getTask("5e39c3384caa9d380437f5cb")).resolves.toBe(task);
  });

  it("createTask", () => {
    expect(service.createTask(task)).resolves.toBe(task);
  });

  it("deleteTask", () => {
    expect(service.deleteTask("5e39c3384caa9d380437f5cb")).resolves.toBe(task);
  });

  it("updateTask", () => {
    expect(service.updateTask("5e39c3384caa9d380437f5cb", task)).resolves.toBe(
      task
    );
  });
});

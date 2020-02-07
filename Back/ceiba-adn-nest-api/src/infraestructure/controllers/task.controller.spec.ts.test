import TaskController from "./task.controller"
import { TestingModule, Test } from "@nestjs/testing";
import GetAllTasksUseCase from "../../application/useCases/getAllTasks.usecase";
import { TaskService } from "../../domain/services/task.service";
import { InfrastructureModule } from "../infrastructure.module";

describe('Task Controller', () => {
  let controller: TaskController;

  const eventModel = {
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        InfrastructureModule
      ],
    }).compile();

    controller = module.get<TaskController>(TaskController);
  })

  it('should be defined', () => {
    expect(controller).toBeDefined();
  })
})
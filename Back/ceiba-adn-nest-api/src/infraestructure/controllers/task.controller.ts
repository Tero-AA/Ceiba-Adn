import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
} from '@nestjs/common';
import GetAllTasksUseCase from 'src/application/useCases/getAllTasks.usecase';
import CreateTaskUseCase from 'src/application/useCases/createTask.usecase';
import Task from 'src/domain/task';

@Controller('tasks/')
export default class TaskController {
  constructor(
    private getAllTaskUseCase: GetAllTasksUseCase,
    private createTaskUseCase: CreateTaskUseCase
  ) {}

  @Get()
  public async getAllTasks(@Res() request): Promise<any> {
    const tasks = await this.getAllTaskUseCase.handler();
    return request.status(HttpStatus.OK).json(tasks);
  }

  @Post()
  public async createTask(@Res() request, @Body() task: Task): Promise<any> {
    const taskCreated = await this.createTaskUseCase.handler(task);
    return request.status(HttpStatus.CREATED).json(taskCreated);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
} from '@nestjs/common';
import GetAllTasksUseCase from 'src/application/useCases/getAllTasks.usecase';
import CreateTaskUseCase from 'src/application/useCases/createTask.usecase';
import Task from 'src/domain/task';
import DeleteTaskUseCase from 'src/application/useCases/deleteTask.usecase';
import GetTaskUseCase from 'src/application/useCases/getTask.usecase';
import UpdateTaskUseCase from 'src/application/useCases/updateTask.usecase';

@Controller('tasks')
export default class TaskController {
  constructor(
    private getAllTaskUseCase: GetAllTasksUseCase,
    private createTaskUseCase: CreateTaskUseCase,
    private deleteTaskUseCase: DeleteTaskUseCase,
    private getTaskUseCase: GetTaskUseCase,
    private updatetaskUseCase: UpdateTaskUseCase,
  ) {}

  @Get()
  public async getAllTasks(@Res() request): Promise<any> {
    const tasks = await this.getAllTaskUseCase.handler();
    return request.status(HttpStatus.OK).json(tasks);
  }

  @Get(':id')
  public async getTask(
    @Res() request, 
    @Param('id') id: string
  ): Promise<any> {
    const task = await this.getTaskUseCase.handler(id);
    return request.status(HttpStatus.OK).json(task);
  }

  @Post()
  public async createTask(
    @Res() request, 
    @Body() task: Task
  ): Promise<any> {
    const taskCreated = await this.createTaskUseCase.handler(task);
    return request.status(HttpStatus.CREATED).json(taskCreated);
  }

  @Delete(':id')
  public async deleteTask(
    @Res() request,
    @Param('id') id: string
  ): Promise<any> {
    const task = await this.deleteTaskUseCase.handler(id);
    return request.status(HttpStatus.OK).json(task);
  }

  @Put(':id')
  public async updateTask(
    @Res() request,
    @Param('id') id: string,
    @Body() task: Task,
  ): Promise<any> {
    const taskUpdated = await this.updatetaskUseCase.handler(id, task)
    return request.status(HttpStatus.OK).json(taskUpdated)
  }
}

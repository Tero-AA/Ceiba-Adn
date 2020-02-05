import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { TaskEntity } from './entity/task.entity';
import TaskMapper from '../../mapper/task.mapper';
import { TaskRepository } from '../../../domain/ports/task.repository';
import TaskDto from 'src/domain/dto/task.dto';

@Injectable()
export default class TaskRepositoryMongo implements TaskRepository {
  constructor(@InjectModel('Task') private taskModel: Model<TaskEntity>) {}

  public async getAllTasks(): Promise<TaskDto[]> {
    const tasks = await this.taskModel.find();
    return TaskMapper.toDoms(tasks);
  }

  public async getTask(taskId: string): Promise<TaskDto> {
    const task = await this.taskModel.findById(taskId);
    return TaskMapper.toDom(task);
  }

  public async createTask(task: TaskDto): Promise<TaskDto> {
    let taskCreated = new this.taskModel(task);
    taskCreated = await taskCreated.save();
    return TaskMapper.toDom(taskCreated);
  }

  public async deleteTask(taskId: string): Promise<TaskDto> {
    const taskDeleted = await this.taskModel.findByIdAndDelete(taskId);
    return TaskMapper.toDom(taskDeleted);
  }

  public async updateTask(taskId: string, task: TaskDto): Promise<TaskDto> {
    const taskUpdated = await this.taskModel.findByIdAndUpdate(taskId, task, {
      new: true,
    });
    return TaskMapper.toDom(taskUpdated);
  }
}

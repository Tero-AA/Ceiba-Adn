import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from '../ports/task.repository';
import TaskDto from '../dto/task.dto';

let moment = require('moment');

@Injectable()
export class TaskService {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  getAllTasks(): Promise<TaskDto[]> {
    return this.taskRepository.getAllTasks();
  }

  getTask(id: string): Promise<TaskDto> {
    return this.taskRepository.getTask(id);
  }

  createTask(task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.createTask(task);
  }

  deleteTask(id: string): Promise<TaskDto> {
    return this.taskRepository.deleteTask(id);
  }

  async updateTask(id: string, task: TaskDto): Promise<TaskDto> {

    let updatedTask = await this.taskRepository.updateTask(id, task);
    let onTimePayment = updatedTask.pay;
    let dueDate = moment(updatedTask.taskDueDate);
    let completionDate = moment(updatedTask.taskCompletionDate);
    let difference = dueDate.diff(completionDate, 'days')

    if (difference === 0) {
      updatedTask.pay = onTimePayment;
    } else if (difference >= 1) {
      updatedTask.pay = onTimePayment * 1.5;
    } else if (difference === -1) {
      updatedTask.pay = onTimePayment * 0.75;
    } else if (difference <= -2) {
      updatedTask.pay = onTimePayment * 0.5;
    }

    return updatedTask;
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from '../ports/task.repository';
import TaskDto from '../dto/task.dto';
import * as moment from 'moment';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository,
  ) {}

  // GET ALL TASKS
  getAllTasks(): Promise<TaskDto[]> {
    return this.taskRepository.getAllTasks();
  }

  // GET A TASK BY ID
  getTask(id: string): Promise<TaskDto> {
    return this.taskRepository.getTask(id);
  }

  // CREATE A NEW TASK
  createTask(task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.createTask(task);
  }

  // DELETE A TASK BY ID
  deleteTask(id: string): Promise<TaskDto> {
    return this.taskRepository.deleteTask(id);
  }

  // COMPLETE/UPDATE A TASK
  async updateTask(id: string, task: TaskDto): Promise<TaskDto> {
    let updatedTask = await this.taskRepository.updateTask(id, task);
    let onTimePayment = updatedTask.pay;
    let dueDate = moment(updatedTask.taskDueDate);
    let completionDate = moment(updatedTask.taskCompletionDate);
    let difference = dueDate.diff(completionDate, 'days');
    // PRICE MULTIPLIERS
    let bonus = 1.5;
    let late = 0.75;
    let superLate = 0.5;

    // LOGIC
    if (difference === 0) {
      updatedTask.pay = onTimePayment;
    } else if (difference >= 1) {
      updatedTask.pay = onTimePayment * bonus;
    } else if (difference === -1) {
      updatedTask.pay = onTimePayment * late;
    } else if (difference < -1) {
      updatedTask.pay = onTimePayment * superLate;
    }

    return updatedTask;
  }
}

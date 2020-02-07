import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from '../ports/task.repository';
import TaskDto from '../dto/task.dto';

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

  updateTask(id: string, task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.updateTask(id, task);
  }

  // Añadir logica de negocio 
}

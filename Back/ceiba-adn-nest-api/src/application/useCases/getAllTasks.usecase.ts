import { Inject, Injectable } from '@nestjs/common';
import Task from 'src/domain/task';
import { TaskRepository } from '../../domain/ports/task.repository';

@Injectable()
export default class GetAllTasksUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(): Promise<Task[]> {
    return this.taskRepository.getAllTasks();
  }
}

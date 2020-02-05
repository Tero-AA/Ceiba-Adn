import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from 'src/domain/ports/task.repository';
import Task from 'src/domain/task';

@Injectable()
export default class DeleteTaskUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(id: string): Promise<Task> {
    return this.taskRepository.deleteTask(id);
  }
}

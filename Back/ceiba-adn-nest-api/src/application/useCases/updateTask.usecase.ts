import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from 'src/domain/ports/task.repository';
import Task from 'src/domain/task';

@Injectable()
export default class UpdateTaskUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(taskId: string, task: Task): Promise<Task> {
    return this.taskRepository.updateTask(taskId, task);
  }
}

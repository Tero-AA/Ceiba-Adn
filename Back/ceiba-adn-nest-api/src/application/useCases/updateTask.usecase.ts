import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from 'src/domain/ports/task.repository';
import TaskDto from 'src/domain/dto/task.dto';

@Injectable()
export default class UpdateTaskUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(taskId: string, task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.updateTask(taskId, task);
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from 'src/domain/ports/task.repository';
import TaskDto from 'src/domain/dto/task.dto';

@Injectable()
export default class GetTaskUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(id: string): Promise<TaskDto> {
    return this.taskRepository.getTask(id);
  }
}

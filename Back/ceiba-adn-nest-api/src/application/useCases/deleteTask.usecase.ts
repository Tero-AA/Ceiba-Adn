import { Injectable, Inject } from '@nestjs/common';
import TaskDto from 'src/domain/dto/task.dto';
import { TaskService } from '../../domain/services/task.service';

@Injectable()
export default class DeleteTaskUseCase {
  constructor(
    @Inject('TaskService') private taskRepository: TaskService
  ) {}

  public handler(id: string): Promise<TaskDto> {
    return this.taskRepository.deleteTask(id);
  }
}

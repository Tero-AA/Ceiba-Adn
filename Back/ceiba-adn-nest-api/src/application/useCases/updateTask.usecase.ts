import { Injectable, Inject } from '@nestjs/common';
import TaskDto from 'src/domain/dto/task.dto';
import { TaskService } from '../../domain/services/task.service';

@Injectable()
export default class UpdateTaskUseCase {
  constructor(
    @Inject('TaskService') private taskRepository: TaskService
  ) {}

  public handler(taskId: string, task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.updateTask(taskId, task);
  }
}

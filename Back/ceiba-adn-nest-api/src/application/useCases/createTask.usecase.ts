import { Injectable, Inject } from '@nestjs/common';
import TaskDto from 'src/domain/dto/task.dto';
import { TaskService } from '../../domain/services/task.service';

@Injectable()
export default class CreateTaskUseCase {
  constructor(
    @Inject('TaskService') private taskRepository: TaskService
  ) {}

  public handler(task: TaskDto): Promise<TaskDto> {
    return this.taskRepository.createTask(task);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import TaskDto from 'src/domain/dto/task.dto';
import { TaskService } from '../../domain/services/task.service';

@Injectable()
export default class GetAllTasksUseCase {
  constructor(@Inject('TaskService') private taskRepository: TaskService) {}

  public handler(): Promise<TaskDto[]> {
    return this.taskRepository.getAllTasks();
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { TaskRepository } from '../../domain/ports/task.repository';
import TaskDto from 'src/domain/dto/task.dto';

@Injectable()
export default class GetAllTasksUseCase {
  constructor(
    @Inject('TaskRepository') private taskRepository: TaskRepository
  ) {}

  public handler(): Promise<TaskDto[]> {
    return this.taskRepository.getAllTasks();
  }
}

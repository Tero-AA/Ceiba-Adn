import { TaskEntity } from '../adapters/repository/entity/task.entity';
import TaskDto from '../../domain/dto/task.dto';

export default class TaskMapper {
  public static toDom(taskEntity: TaskEntity): TaskDto {
    return new TaskDto(
      taskEntity.id,
      taskEntity.taskName,
      taskEntity.taskDescription,
      taskEntity.status,
      taskEntity.taskDueDate,
      new Date(taskEntity.taskCreationDate),
      taskEntity.taskCompletionDate,
      taskEntity.pay
    );
  }

  public static toDoms(taskEntity: TaskEntity[]): TaskDto[] {
    const tasks = new Array<TaskDto>();
    taskEntity.forEach(entity => {
      const task = this.toDom(entity);
      tasks.push(task);
    });
    return tasks;
  }
}

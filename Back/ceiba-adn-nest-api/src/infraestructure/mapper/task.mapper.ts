import Task from 'src/domain/task';
import { TaskEntity } from '../adapters/repository/entity/task.entity';

export default class TaskMapper {
  public static toDom(taskEntity: TaskEntity): Task {
    return new Task(
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

  public static toDoms(taskEntity: TaskEntity[]): Task[] {
    const tasks = new Array<Task>();
    taskEntity.forEach(taskEntity => {
      const task = this.toDom(taskEntity);
      tasks.push(task);
    });
    return tasks;
  }
}

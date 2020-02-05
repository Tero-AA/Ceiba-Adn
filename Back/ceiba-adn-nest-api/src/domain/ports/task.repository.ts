import TaskDto from '../dto/task.dto';

export interface TaskRepository {
  getAllTasks(): Promise<TaskDto[]>;

  getTask(id: string): Promise<TaskDto>;

  createTask(task: TaskDto): Promise<TaskDto>;

  deleteTask(id: string): Promise<TaskDto>;

  updateTask(id: string, task: TaskDto): Promise<TaskDto>;
}

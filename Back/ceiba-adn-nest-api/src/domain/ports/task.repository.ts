import Task from '../task';

export interface TaskRepository {
  getAllTasks(): Promise<Task[]>;

  getTask(id: string): Promise<Task>;

  createTask(task: Task): Promise<Task>;

  deleteTask(id: string): Promise<Task>;

  updateTask(id: string, task: Task): Promise<Task>;
}

import TaskDto from "../dto/task.dto";

export interface TaskRepository {
  getAllTasks(): Promise<TaskDto[]>;

  /**
   * Returns all tasks
   * @returns an array of `tasks` objects containing the data.
   */

  getTask(id: string): Promise<TaskDto>;

  /**
   * Returns a task filtered by id
   * @param {string} id
   * @returns a `task` object containing the requested data.
   */

  createTask(task: TaskDto): Promise<TaskDto>;

  /**
   * Returns a task filtered by id
   * @param {TaskDto} task
   * @returns a `task` object containing the created data.
   */

  deleteTask(id: string): Promise<TaskDto>;

  /**
   * Deletes a task filtered by id
   * @param {string} id
   * @returns a `task` object containing the deleted data.
   */

  updateTask(id: string, task: TaskDto): Promise<TaskDto>;
  /**
   * Returns a task filtered by id
   * @param {string} id
   * @param {TaskDto} task
   * @returns a `task` object containing the updated data.
   */
}

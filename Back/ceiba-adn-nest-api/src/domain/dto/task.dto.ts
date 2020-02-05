export default class TaskDto {
  private id: string;

  private taskName: string;

  private taskDescription: string;

  private status: string;

  private taskDueDate: Date;

  private taskCreationDate: Date;

  private taskCompletionDate: Date;

  private pay: number;

  constructor(
    id: string,
    taskName: string,
    taskDescription: string,
    status: string,
    taskDueDate: Date,
    taskCreationDate: Date,
    taskCompletionDate: Date,
    pay: number
  ) {
    this.id = id;
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.status = status;
    this.taskDueDate = taskDueDate;
    this.taskCreationDate = taskCreationDate;
    this.taskCompletionDate = taskCompletionDate;
    this.pay = pay;
  }

  //GETTERS

  public getId(): string {
    return this.id;
  }
  public getTaskName(): string {
    return this.taskName;
  }
  public getTaskDescription(): string {
    return this.taskDescription;
  }
  public getStatus(): string {
    return this.status;
  }
  public getTaskDueDate(): Date {
    return this.taskDueDate;
  }
  public getTaskCreationDate(): Date {
    return this.taskCreationDate;
  }
  public getTaskCompletionDate(): Date {
    return this.taskCompletionDate;
  }
  public getPay(): number {
    return this.pay;
  }

  //SETTERS

  public setId(): string {
    return this.id;
  }
  public setTaskName(): string {
    return this.taskName;
  }
  public setTaskDescription(): string {
    return this.taskDescription;
  }
  public setStatus(): string {
    return this.status;
  }
  public setTaskDueDate(): Date {
    return this.taskDueDate;
  }
  public setTaskCreationDate(): Date {
    return this.taskCreationDate;
  }
  public setTaskCompletionDate(): Date {
    return this.taskCompletionDate;
  }
  public setPay(): number {
    return this.pay;
  }
}

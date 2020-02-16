export default class TaskDto {
  id: string;
  taskName: string;
  taskDescription: string;
  status: string;
  taskDueDate: Date;
  taskCreationDate: Date;
  taskCompletionDate: Date;
  pay: number;

  constructor(
    id: string,
    taskName: string,
    taskDescription: string,
    status: string,
    taskDueDate: Date,
    taskCreationDate: Date,
    taskCompletionDate: Date,
    pay: number,
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
}

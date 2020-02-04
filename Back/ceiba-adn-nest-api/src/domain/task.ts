export default class Task {
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

  public getPayment(): number {
    // falta logica de negocio
    return this.pay;
  }
}

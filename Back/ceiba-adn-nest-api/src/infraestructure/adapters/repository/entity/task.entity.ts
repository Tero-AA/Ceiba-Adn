import { Document } from "mongoose";

export interface TaskEntity extends Document {
  taskName: string;
  taskDescription: string;
  status: string;
  taskDueDate: Date;
  taskCreationDate: Date;
  taskCompletionDate: Date;
  pay: number;
}

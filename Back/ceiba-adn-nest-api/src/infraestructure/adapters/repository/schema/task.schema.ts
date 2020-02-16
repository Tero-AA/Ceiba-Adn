import { Schema } from "mongoose";

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String,
    default: "Description"
  },
  status: {
    type: String,
    default: "To Do"
  },
  taskDueDate: {
    type: Date,
    required: true
  },
  taskCreationDate: {
    type: Date,
    default: Date.now
  },
  taskCompletionDate: {
    type: Date
  },
  pay: {
    type: Number,
    required: true
  }
});

export default TaskSchema;

import {Schema, model} from 'mongoose';

const taskSchema = new Schema({
  name:{
    type: String,
    require: true
  },
  description:{
    type: String,
    require: true
  },
  status:{
    type: Boolean,
    require: true,
    default: true
  }
});

export const TaskModel = model('tasks', taskSchema);
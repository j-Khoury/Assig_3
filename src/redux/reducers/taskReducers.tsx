// reducers/taskReducer.js

import { ADD_TASK, DELETE_TASK, GET_TASK_BY_ID, REACTIVATE_TASK } from "../actions/taskActions";
import { COMPLETE_TASK } from "../actions/taskActions";


interface Task {
  id: string,
  name: string,
  desc: string
}

interface TaskState {
  activeTasks: Task[];
  completedTasks: Task[];
  tasks: Task[];
}

const initialState: TaskState = {
  activeTasks: [],
  completedTasks: [],
  tasks: []
};

const taskReducer = (state = initialState, action: any) => {

  switch (action.type) {

    case ADD_TASK:
      return {
        ...state,
        activeTasks: [...state.activeTasks, action.payload],
        tasks: [...state.activeTasks, action.payload],
      };
      

    case COMPLETE_TASK:
      return {
        ...state,
        activeTasks: state.activeTasks.filter(
          (task) => task.id !== action.payload
        ),
        completedTasks: [
          ...state.completedTasks,
          state.activeTasks.find((task) => task.id === action.payload),
        ],
      };

    case REACTIVATE_TASK:
      return {
        ...state,
        completedTasks: state.completedTasks.filter(
          (task) => task.id !== action.payload
        ),
        activeTasks: [
          ...state.activeTasks,
          state.completedTasks.find((task) => task.id === action.payload),
        ],
      };

      case DELETE_TASK:
      const { index, listType } = action.payload;
      if (listType === 'active') {
        return {
          ...state,
          activeTasks: state.activeTasks.filter((_, i) => i !== index)
        };
      } else {
        return {
          ...state,
          completedTasks: state.completedTasks.filter((_, i) => i !== index)
        };
      };

      case GET_TASK_BY_ID:
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      return {
        ...state,
        taskById: task
      };
    default:
      return state;
  }
};

export default taskReducer;

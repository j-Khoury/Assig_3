export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REACTIVATE_TASK = 'REACTIVATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASK_BY_ID = 'GET_TASK_BY_ID';

export const addTask = (id: string, name: string, desc: string) => ({
  type: ADD_TASK,
  payload: { id, name, desc }
});

export const completeTask = (id: string) => ({
  type: COMPLETE_TASK,
  payload: id,
});

export const reactivateTask = (id: string) => ({
  type: REACTIVATE_TASK,
  payload: id,
});


export const deleteTask = (index: number, listType: string) => {
  return {
    type: DELETE_TASK,
    payload: { index, listType }
  };
};

export const getTaskById = (id: string) => {
  return {
    type: GET_TASK_BY_ID,
    payload: id
  } as const;
};
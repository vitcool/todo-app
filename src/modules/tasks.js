const ADD_TASK = "todo/modules/tasks/ADD_TASK";
const REMOVE_TASK = "todo/modules/tasks/REMOVE_TASK";
const DONE_TASK = "todo/modules/tasks/DONE_TASK";

const initialState = {
  tasks: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      let newState = state;
      newState.tasks.push({
        task: action.task,
        done: false,
        index: newState.tasks.length
      });
      return newState;

    case REMOVE_TASK:
      return removeSomeTask(state, action.index);

    case DONE_TASK:
      return doneSomeTask(state, action.index);;

    default:
      return state;
  }
}

export function addTask(task) {
  return {
    type: ADD_TASK,
    task: task
  };
}

export function removeTask(index) {
  return {
    type: REMOVE_TASK,
    index: index
  };
}

export function doneTask(index) {
  return {
    type: DONE_TASK,
    index: index
  };
}

function removeSomeTask(state, index){
    let newState = state;
    newState.tasks.splice(index, 1);
    return newState;
}

function doneSomeTask(state, index){
    let newState = state;
    newState.tasks[index].done = !newState.tasks[index].done;
    return newState;
}

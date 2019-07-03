import { UPDATE_TASKS } from '../actions/todolist'
  
function todolist(state = {tasks: []}, action){
    switch (action.type) {
        case UPDATE_TASKS:
            console.log(state)
            return {tasks: action.tasks};
        default:
            return state;
    }
}

export default todolist;
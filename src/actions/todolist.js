export const UPDATE_TASKS = 'TODO_LIST.UPDATE_TASKS'

export function updateTasks(tasks){
    return {type: UPDATE_TASKS, tasks};
}


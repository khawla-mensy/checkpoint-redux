import { ADD_TASK } from "../Constants/actions-types";
import { TASK_DONE } from "../Constants/actions-types";
import { TASK_EDITED } from "../Constants/actions-types";
const initialState = {
    todos: [
        { task: "Task1", id: 1, isDone: false },
        { task: "Task2", id: 2, isDone: false },
        { task: "Task3", id: 3, isDone: false },
        { task: "Task4", id: 4, isDone: false },
    ],
};
export default function todoReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case ADD_TASK: {
            return {
                todos: [
                    ...state.todos,
                    { task: payload.newTask, id: Math.random(), isDone: false },
                ],
            };
        }
        case TASK_DONE: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: !task.isDone }
                        : task
                ),
            };
        }
        case TASK_EDITED: {
            return {
                todos: state.todos.map((task) =>
                    task.id === payload.id
                        ? { ...task, task: payload.modifiedTask }
                        : task
                ),
            };
        }

        default:
            return state;
    }
}

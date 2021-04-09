import { ADD_TASK } from "../Constants/actions-types";
import { TASK_DONE } from "../Constants/actions-types";
import { TASK_EDITED } from "../Constants/actions-types";
export const addTask = (payload) => {
    return {
        type: ADD_TASK,
        payload: payload,
    };
};
export const taskDone = (payload) => {
    return {
        type: TASK_DONE,
        payload: payload,
    };
};
export const taskEdited = (payload) => {
    return {
        type: TASK_EDITED,
        payload: payload,
    };
};

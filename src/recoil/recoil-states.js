import { atom } from "recoil";
import { STATE_KEYS } from './types'

const taskListState = atom({
    key: STATE_KEYS.TASK_LIST,
    default: []
})

const selectedTaskState = atom({
    key: STATE_KEYS.SELECTED_TASK,
    default: null
})

export {
    taskListState,
    selectedTaskState
}
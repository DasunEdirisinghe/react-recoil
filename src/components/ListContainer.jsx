import { useRecoilState, useRecoilValue } from "recoil"
import { taskListState } from "../recoil/recoil-states"
import ListItem from "./ListItem"

const ListContainer = () => {
    const taskList = useRecoilValue(taskListState)

    return (
        <div className="h-[60vh] overflow-y-auto w-full flex flex-col gap-3">
            {taskList.map((line, index) => <ListItem key={index} {...line} />)}
            {(typeof taskList !== 'undefined' && taskList.length === 0) && <h1 className="bg-gray-400 py-4 text-white w-full rounded-md text-center">No tasks found!</h1>}
        </div>
    )
}

export default ListContainer
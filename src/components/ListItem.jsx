import { IoCloseCircleOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import { taskListState, selectedTaskState } from "../recoil/recoil-states"

const ListItem = ({ title, subTitle, id }) => {
    const setTaskList = useSetRecoilState(taskListState)
    const setSelectedTask = useSetRecoilState(selectedTaskState)

    const onDeleteHandler = () => {
        setTaskList((prev) => [
            ...prev.filter(line => line.id != id)
        ])
    }

    const onSelectedHandler = () => {
        setSelectedTask({
            id, title, subTitle
        })
    }

    return (
        <div className="rounded-md flex justify-between items-center relative bg-gray-300 p-5">
            <div onClick={onSelectedHandler} className="w-full mr-6">
                <h1 className="text-lg font-semibold">{title}</h1>
                <h1 className="text-xs">{subTitle}</h1>
            </div>

            <IoCloseCircleOutline onClick={onDeleteHandler} className="w-5 h-5 z-30 hover:text-red-400 transition-all" />
        </div>
    )
}

export default ListItem
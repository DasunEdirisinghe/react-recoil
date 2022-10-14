import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { taskListState, selectedTaskState } from '../recoil/recoil-states'
import { v4 as uuidv4 } from 'uuid';

const Controller = () => {
    const setTaskList = useSetRecoilState(taskListState)
    const [getSelectedTask, setSelectedTask] = useRecoilState(selectedTaskState)

    const onAddHandler = (event) => {
        event.preventDefault()
        const [titleElement, subTitleElement] = event.target

        if (getSelectedTask) {
            setTaskList(prev => {
                const index = prev.findIndex(line => line.id == getSelectedTask.id)
                const arr = JSON.parse(JSON.stringify(prev))
                arr[index] = {
                    id: getSelectedTask.id || "Title",
                    title: titleElement.value || "Sub Title",
                    subTitle: subTitleElement.value
                }
                return arr
            })
        } else {
            setTaskList((prev) => [
                {
                    id: uuidv4(),
                    title: titleElement.value || "Title",
                    subTitle: subTitleElement.value || "Sub Title"
                },
                ...prev
            ])
        }
        setSelectedTask(null)
        document.getElementById("controller").reset();
    }

    console.log("s");

    return (
        <form id="controller" onSubmit={onAddHandler} className="flex w-full flex-col items-end gap-4 p-3 bg-gray-200 rounded-lg">
            <div className="flex items-center gap-4 w-full">
                <input defaultValue={getSelectedTask?.title} name="title" placeholder="Title" className="w-full border rounded-md p-2 shadow border-gray-500" type="text" />
                <input defaultValue={getSelectedTask?.subTitle} name="desc" placeholder="Description" className="w-full border rounded-md p-2 shadow border-gray-500" type="text" />
            </div>

            <button type="submit" className="px-3 py-2 w-full bg-green-400 rounded hover:bg-green-500">
                {getSelectedTask ? "Update" : "Add"}
            </button>
        </form>
    )
}

export default Controller
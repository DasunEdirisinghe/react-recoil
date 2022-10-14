import { IoCloseCircleOutline } from "react-icons/io5";

const ListItem = () => {

    return (
        <div className="rounded-md flex justify-between items-center bg-gray-300 p-5">
            <div>
                <h1 className="text-lg font-semibold">Title</h1>
                <h1 className="text-xs">Desck</h1>
            </div>

            <IoCloseCircleOutline className="w-5 h-5 hover:text-red-400 transition-all" />
        </div>
    )
}

export default ListItem
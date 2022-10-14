const Controller = () => {

    return (
        <div className="flex w-full flex-col items-end gap-4 p-3 bg-gray-200 rounded-lg">
            <div className="flex items-center gap-4 w-full">
                <input placeholder="Title" className="w-full border rounded-sm p-2 shadow border-gray-500" type="text" />
                <input placeholder="Description" className="w-full border rounded-sm p-2 shadow border-gray-500" type="text" />
            </div>

            <button className="px-3 py-2 bg-green-400 rounded hover:bg-green-500">Add</button>
        </div>
    )
}

export default Controller
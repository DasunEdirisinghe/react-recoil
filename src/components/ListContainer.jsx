import ListItem from "./ListItem"

const ListContainer = () => {

    return (
        <div className="h-[60vh] overflow-y-auto w-full flex flex-col gap-3">
            <ListItem />
            <ListItem />
        </div>
    )
}

export default ListContainer
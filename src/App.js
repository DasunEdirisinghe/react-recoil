import Controller from "./components/Controller";
import ListContainer from "./components/ListContainer";

function App() {
    return (
        <div className="w-full my-5 flex justify-center flex-col items-center">
            <div className="max-w-4xl">
                <ListContainer />
                <Controller />
            </div>
        </div>
    );
}

export default App;

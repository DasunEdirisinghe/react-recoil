import Controller from "./components/Controller";
import ListContainer from "./components/ListContainer";

function App() {
    return (
        <div className="w-full my-5 flex justify-center flex-col items-center">
            <div className="max-w-4xl border bg-gray-50 shadow-lg p-3">
                <h1 className="w-full rounded-md text-white font-bold text-2xl text-center bg-gray-600 p-4 mb-4">Task App With Recoil</h1>
                <ListContainer />
                <Controller />
            </div>
        </div>
    );
}

export default App;

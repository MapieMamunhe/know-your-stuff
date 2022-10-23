import "./App.css";
import CardSelection from "./components/CardSelection";
import Header from "./components/Header";
import Timer from "./components/Timer";
function App() {
  let percentage = 90;
  return (
    <>
      <Header />
      <Timer />
      <CardSelection />
      <div className="flex justify-center my-4 ">
        <button className="bg-green-600 hover:bg-blue-600 rounded-md w-20 h-10 text-center text-white">
          Confirm
        </button>
      </div>
      <div className="fixed bottom-0 w-screen bg-black">
        <p
          className={"bg-blue-700 text-white"}
          style={{ width: `${percentage}%` }}
        >
          Progresso
        </p>
      </div>
    </>
  );
}

export default App;

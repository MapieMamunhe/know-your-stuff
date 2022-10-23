import "./App.css";
import CardSelection from "./components/CardSelection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
function App() {
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
      <Footer />
    </>
  );
}

export default App;

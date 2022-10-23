import "./App.css";
import CardSelection from "./components/CardSelection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchInterval: false,
      staleTime: Infinity,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Timer />
      <CardSelection />
      <div className="flex justify-center my-4 ">
        <button className="bg-green-600 hover:bg-blue-600 rounded-md w-20 h-10 text-center text-white">
          Confirm
        </button>
      </div>
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

import "./App.css";
import CardSelection from "./components/CardSelection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AdditionalInfo from "./components/AdditionalInfo";
import Button, { gameOverAtom } from "./components/Button";
import { useAtom } from "jotai";
import EndGameMessageComponent from "./components/EndGameMessageComponent";

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
  const [gameOver] = useAtom(gameOverAtom);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {gameOver ? (
        <EndGameMessageComponent message={"Fim"} />
      ) : (
        <>
          <AdditionalInfo />
          <CardSelection />
        </>
      )}
      <Button />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

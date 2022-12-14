import "./App.css";
import CardSelection from "./components/CardSelection";
import Footer, { scoreAtom } from "./components/Footer";
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
  const [score] = useAtom(scoreAtom);
  let message = `Sua pontuação ${score} tente novamente e consiga 100%`;
  if (score >= 100) {
    message = "Parabéns! Seu conhecimento é inigualável!";
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      {gameOver ? (
        <EndGameMessageComponent message={message} />
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

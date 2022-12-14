import "./App.css";
import CardSelection from "./components/CardSelection";
import Footer, { scoreAtom } from "./components/Footer";
import Header from "./components/Header";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AdditionalInfo from "./components/AdditionalInfo";
import AnswerButton, { gameOverAtom } from "./components/AnswerButton";
import { useAtom } from "jotai";
import EndGameMessageComponent from "./components/EndGameMessageComponent";
import ResetButton from "./components/ResetButton";
import { timerAtom } from "./components/Timer";

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
  const [gameOver, setGameOver] = useAtom(gameOverAtom);
  const [score] = useAtom(scoreAtom);
  const [timer] = useAtom(timerAtom);
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
      {score >= 100 || timer == 0 ? <ResetButton /> : <AnswerButton />}
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

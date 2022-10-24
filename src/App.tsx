import "./App.css";
import CardSelection, { selectedCardAtom } from "./components/CardSelection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./components/Timer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import AdditionalInfo from "./components/AdditionalInfo";
import Button from "./components/Button";

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
      <AdditionalInfo />
      <CardSelection />
      <Button />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

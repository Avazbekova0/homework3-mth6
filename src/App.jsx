import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRouter } from './router/AppRouter';
import './App.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;

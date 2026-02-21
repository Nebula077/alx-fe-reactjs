import { QueryClient, QueryClientProvider } from 'react-query';
import FetchData from './components/PostsComponent';

const queryClient = new QueryClient();

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <FetchData />
      </QueryClientProvider>
    );
  };

export default App;
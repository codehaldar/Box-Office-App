import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Starred from './Pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './Pages/Show';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalTheme from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/show/:ShowId" element={<Show />} />
          </Routes>
        </BrowserRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import OpportunitiesPage from './pages/OpportunitiesPage';
import TenderDetailPage from './pages/TenderDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpportunitiesPage />} />

        <Route path="/tenders/:id" element={<TenderDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

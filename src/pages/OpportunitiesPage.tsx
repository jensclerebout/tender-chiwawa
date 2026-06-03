import TenderList from '../components/TenderList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTenders, setFilterdTenders] = useState(TenderList);

  return (
    <main>
      <h1>TenderChiwawa 🐕</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <p>{searchTerm}</p>
      <p>Aantal resultaten: {filteredTenders.length}</p>
      <TenderList />
    </main>
  );
}

export default OpportunitiesPage;

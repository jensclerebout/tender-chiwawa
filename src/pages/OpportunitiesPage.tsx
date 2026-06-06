import TenderList from '../components/TenderList';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';
import { tenders } from '../data/tenders';

function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTenders = tenders.filter((tender) =>
    tender.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <main>
      <h1>TenderChiwawa 🐕</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <p>{searchTerm}</p>
      <p>Aantal resultaten: </p>
      <TenderList tenders={filteredTenders} />
    </main>
  );
}

export default OpportunitiesPage;

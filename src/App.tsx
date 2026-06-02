import TenderCard from './components/TenderCard';
import { tenders } from './data/tenders';

function App() {
  return (
    <div>
      <h1>TenderChiwawa 🐕</h1>
      <TenderCard tender={tenders[0]} />
    </div>
  );
}

export default App;

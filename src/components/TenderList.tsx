import TenderCard from './TenderCard';
import { tenders } from '../data/tenders';

function TenderList() {
  return (
    <>
      {tenders.map((tender) => (
        <TenderCard key={tender.id} tender={tender} />
      ))}
    </>
  );
}

export default TenderList;

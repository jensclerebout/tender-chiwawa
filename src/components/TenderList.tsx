import TenderCard from './TenderCard';
import type { Tender } from '../types/Tender';

type TenderListProps = {
  tenders: Tender[];
};

function TenderList({ tenders }: TenderListProps) {
  return (
    <>
      {tenders.map((tender) => (
        <TenderCard key={tender.id} tender={tender} />
      ))}
    </>
  );
}

export default TenderList;

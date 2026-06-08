import { useParams } from 'react-router-dom';
import { tenders } from '../data/tenders';

function TenderDetailPage() {
  const { id } = useParams();

  const tender = tenders.find((tender) => tender.id === id);

  return (
    <>
      <h1>{tender?.title}</h1>
      <p>{tender?.organization}</p>
      <p>{tender?.description}</p>
    </>
  );
}

export default TenderDetailPage;

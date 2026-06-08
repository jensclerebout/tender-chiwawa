import { Link } from 'react-router-dom';
import type { Tender } from '../types/Tender';
import styles from './TenderCard.module.css';

type TenderCardProps = {
  tender: Tender;
};

function TenderCard({ tender }: TenderCardProps) {
  return (
    <Link to={`/tenders/${tender.id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <header className={styles.header}>
          <h2 className={styles.title}>{tender.title}</h2>
          <h3 className={styles.organization}>{tender.organization}</h3>
        </header>

        <section className={styles.description}>
          <p>{tender.description}</p>
        </section>

        <section className={styles.meta}>
          <p>Publicatiedatum: {tender.publicationDate}</p>
          <p>Datum opening offertes: {tender.deadline}</p>
          <p>Regiocode (NUTS): {tender.region}</p>

          <p>
            Opdrachtcodes (CPV): {tender.cpv.code} - {tender.cpv.description}
          </p>
        </section>

        <section className={styles.details}>
          <p>Interessante zoektermen: {tender.labels.join(', ')}</p>
          <p>Profielen: {tender.profile}</p>
        </section>
      </article>
    </Link>
  );
}

export default TenderCard;

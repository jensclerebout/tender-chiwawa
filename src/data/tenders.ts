import type { Tender } from '../types/Tender';

export const tenders: Tender[] = [
  {
    id: '1',

    title: 'Software voor facilitaire opvolging',

    organization: 'Stad Halle',

    description:
      'Om de werking van de dienst Facilitair Beheer en van stad en OCMW Halle te optimaliseren wordt een overheidsopdracht uitgeschreven voor de aankoop en implementatie van software die de processen van facilitair beheer moet stroomlijnen. Stad en OCMW Halle werken op dit moment op verschillende manieren voor gebouwenbeheer, asset management, contractbeheer, voorraadbeheer, onderhoudsplanning, meldingenbeheer, werkorders en werkplanning, alsook voor de opmaak van aankoopdossiers overheidsopdrachten voor zowel leveringen, diensten als werken, die vaak een gevolg zijn van technische werken die dienen te gebeuren. Om dit facilitaire luik te uniformiseren en te optimaliseren wenst de organisatie hiervoor een softwarepakket aan te kopen. Stad en OCMW Halle wensen een reeds beschikbare software aan te kopen die over verschillende modules beschikt en waar een zekere vorm van flexibiliteit aanwezig is, maar waarbij maatwerk en bijkomende kosten voor dat maatwerk vermeden worden. De aanbestedende overheid ziet er op toe dat deze opdracht wordt uitgevoerd met inachtname van de anti-discriminatiewetgeving.',

    publicationDate: '04-05-2026',

    deadline: '02-06-2026 10:00',

    region: 'BE241 - Arr. Halle-Vilvoorde',

    cpv: {
      code: '72212420',
      description:
        'Diensten voor ontwikkeling van software en opvolgingssoftware',
    },

    keywords: ['software'],

    profile: 'CPV & zoektermen NL',

    labels: [],

    followed: false,
  },
  {
    id: '2',

    title: 'Implementatie van een digitaal loketsysteem',

    organization: 'Gemeente Mechelen',

    description:
      'De gemeente wenst een gebruiksvriendelijk digitaal loketsysteem aan te schaffen waarmee burgers online attesten kunnen aanvragen, afspraken kunnen maken en dossiers kunnen opvolgen.',

    publicationDate: '12-05-2026',

    deadline: '15-06-2026 09:00',

    region: 'BE212 - Arr. Mechelen',

    cpv: {
      code: '72222300',
      description: 'Ontwikkeling van informatietechnologiesoftware',
    },

    keywords: ['software', 'digitaal loket'],

    profile: 'CPV & zoektermen NL',

    labels: [],

    followed: false,
  },

  {
    id: '3',

    title: 'Aankoop en onderhoud van een CRM-platform',

    organization: 'Provincie Antwerpen',

    description:
      'De provincie zoekt een CRM-oplossing voor het centraliseren van contacten, opvolgen van dossiers en automatiseren van communicatieprocessen.',

    publicationDate: '18-05-2026',

    deadline: '20-06-2026 11:00',

    region: 'BE211 - Arr. Antwerpen',

    cpv: {
      code: '72212517',
      description: 'Ontwikkeling van CRM-software',
    },

    keywords: ['crm', 'software'],

    profile: 'CPV & zoektermen NL',

    labels: [],

    followed: true,
  },

  {
    id: '4',

    title: 'Cloudoplossing voor documentbeheer',

    organization: 'Stad Gent',

    description:
      'De stad wenst een cloudgebaseerde oplossing voor documentbeheer en archivering met aandacht voor beveiliging, versiebeheer en samenwerking.',

    publicationDate: '22-05-2026',

    deadline: '25-06-2026 14:00',

    region: 'BE234 - Arr. Gent',

    cpv: {
      code: '72512000',
      description: 'Documentbeheer- en archiveringsdiensten',
    },

    keywords: ['cloud', 'documentbeheer'],

    profile: 'CPV & zoektermen NL',

    labels: ['cloud'],

    followed: false,
  },

  {
    id: '5',

    title: 'Levering van een HR-managementsysteem',

    organization: 'UZ Leuven',

    description:
      'Het ziekenhuis zoekt een geïntegreerd HR-platform voor personeelsbeheer, verlofaanvragen, evaluaties en rapportering.',

    publicationDate: '28-05-2026',

    deadline: '30-06-2026 10:00',

    region: 'BE242 - Arr. Leuven',

    cpv: {
      code: '72212450',
      description: 'Ontwikkeling van HR-software',
    },

    keywords: ['hr', 'software'],

    profile: 'CPV & zoektermen NL',

    labels: ['hr'],

    followed: true,
  },
];

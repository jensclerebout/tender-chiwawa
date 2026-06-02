export interface Tender {
  id: string;

  title: string;
  organization: string;

  description: string;

  publicationDate: string;
  deadline: string;

  region: string;

  cpv: {
    code: string;
    description: string;
  };

  keywords: string[];

  profile: string;

  labels: string[];

  followed: boolean;
}

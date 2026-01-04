export interface TeamData {
  id: string;
  category: string;
  title: string;
  image: string;
  objective: string;
  stats: {
    players: string;
    age: string;
    training: string;
    matches: string;
  };
  staff: string[];
  program: string[];
  competitions: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  VISION = 'vision',
  TEAMS = 'teams',
  CONTACT = 'contact',
  SPONSORS = 'sponsors',
  GALLERY = 'gallery',
}
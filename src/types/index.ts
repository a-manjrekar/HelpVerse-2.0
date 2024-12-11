export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  cause: string;
  imageUrl: string;
  organizer: string;
  spots: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
}

export type Cause = 'environment' | 'education' | 'health' | 'community' | 'elderly' | 'youth';
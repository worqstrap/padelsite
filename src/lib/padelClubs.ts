export interface PadelClub {
  slug: string;
  name: string;
  city: string;
  country: string;
  rating: number;
  reviewCount: number;
  indoorCourts?: number;
  amenities: string[];
  summary: string;
  areaGuide: string;
  playingGuide: string;
  dataUpdated: string;
}

const files = import.meta.glob<PadelClub>('../content/programmatic-seo/padel-clubs/kenya/nairobi/*.json', {
  eager: true,
  import: 'default',
});

export const padelClubs = Object.values(files).sort((a, b) =>
  b.rating - a.rating || b.reviewCount - a.reviewCount || a.name.localeCompare(b.name),
);

export const clubMapUrl = (club: PadelClub) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${club.name}, ${club.city}, ${club.country}`)}`;

export const clubPath = (club: PadelClub) => `/padel-clubs/kenya/nairobi/${club.slug}/`;

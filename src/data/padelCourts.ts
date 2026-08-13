export interface PadelCourt {
  slug: string;
  name: string;
  area: string;
  city: string;
  country: string;
  summary: string;
  coachingVenue: boolean;
  instagramUrl?: string;
  playtomicUrl?: string;
  directionsUrl?: string;
  courtCount?: number;
  courtType?: string;
}

// Only verified information supplied by Shayaan is published. Add researched venues here
// once their location, facilities and booking links have been confirmed.
export const padelCourts: PadelCourt[] = [
  {
    slug: 'ace-padel-nairobi',
    name: 'Ace Padel',
    area: 'Aga Khan Sports Centre',
    city: 'Nairobi',
    country: 'Kenya',
    summary: "Shayaan's exclusive coaching location and padel partner in Nairobi.",
    coachingVenue: true,
    instagramUrl: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
  },
];

export const plannedLocations = ['Parklands', 'Gigiri', 'Westlands', 'Lavington', 'Ridgeways', 'Ngara', 'Mombasa', 'Diani'];

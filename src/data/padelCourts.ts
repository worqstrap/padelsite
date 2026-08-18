export interface PadelCourt {
  slug: string;
  name: string;
  area: string;
  city: string;
  overview: string;
  courtCount: string;
  indoorOutdoor: string;
  playtomic: boolean;
  playtomicUrl?: string;
  address: string;
  mapsUrl: string;
  website?: string;
  instagram?: string;
  image: string;
  alt: string;
  isCoachingVenue: boolean;
  facilities: string[];
  faqs: { question: string; answer: string }[];
}

export const padelCourts: PadelCourt[] = [
  {
    slug: 'ace-padel-nairobi',
    name: 'Ace Padel',
    area: 'Parklands',
    city: 'Nairobi',
    overview:
      'Ace Padel at Aga Khan Sports Centre is Shayaan\'s exclusive coaching venue in Nairobi. A purpose-built padel facility serving the growing Nairobi padel community.',
    courtCount: '[To be confirmed]',
    indoorOutdoor: '[To be confirmed]',
    playtomic: true,
    playtomicUrl: 'https://app.playtomic.com',
    address: 'Aga Khan Sports Centre, Parklands, Nairobi, Kenya',
    mapsUrl: 'https://maps.google.com/?q=Aga+Khan+Sports+Centre+Nairobi',
    instagram: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
    image: 'https://images.pexels.com/photos/38155778/pexels-photo-38155778.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Modern indoor padel courts with blue surfaces and glass walls',
    isCoachingVenue: true,
    facilities: ['Glass-walled padel courts', 'Court lighting', 'Booking via Playtomic'],
    faqs: [
      {
        question: 'Can I book coaching with Shayaan at Ace Padel?',
        answer:
          'Yes. Shayaan coaches exclusively at Ace Padel. You can book a session via WhatsApp or through the booking link on this site.',
      },
      {
        question: 'How do I book a court at Ace Padel?',
        answer: 'Courts can be booked through the Playtomic app. Search for Ace Padel in the app to see availability.',
      },
      {
        question: 'Where is Ace Padel located?',
        answer: 'Ace Padel is at Aga Khan Sports Centre in Parklands, Nairobi.',
      },
    ],
  },
  {
    slug: 'padel-kenya-gigiri',
    name: 'Padel Kenya',
    area: 'Gigiri',
    city: 'Nairobi',
    overview:
      'A padel club in the Gigiri area of Nairobi offering courts for booking. [Details to be confirmed — this is a placeholder entry for the directory architecture.]',
    courtCount: '[To be confirmed]',
    indoorOutdoor: '[To be confirmed]',
    playtomic: true,
    address: '[Address to be confirmed]',
    mapsUrl: 'https://maps.google.com/?q=padel+Gigiri+Nairobi',
    image: 'https://images.pexels.com/photos/32474981/pexels-photo-32474981.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Indoor padel court with blue flooring',
    isCoachingVenue: false,
    facilities: ['[To be confirmed]'],
    faqs: [
      {
        question: 'Does Shayaan coach at this venue?',
        answer:
          'No. Shayaan coaches exclusively at Ace Padel, Aga Khan Sports Centre. This listing is for informational purposes only.',
      },
    ],
  },
];

export function getCourt(slug: string): PadelCourt | undefined {
  return padelCourts.find((c) => c.slug === slug);
}

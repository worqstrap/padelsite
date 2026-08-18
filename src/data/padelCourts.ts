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
    courtCount: 'Padel',
    indoorOutdoor: 'Purpose-built venue',
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
];

export function getCourt(slug: string): PadelCourt | undefined {
  return padelCourts.find((c) => c.slug === slug);
}

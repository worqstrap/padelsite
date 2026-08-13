export const site = {
  name: 'Shayaan Padel',
  shortName: 'Shayaan',
  location: 'Nairobi, Kenya',
  coachingVenue: 'Ace Padel, Aga Khan Sports Centre',
  bookingUrl: 'https://app.playtomic.com/profile/user/6837291?utm_source=website&utm_campaign=coaching',
  playtomicUrl: 'https://app.playtomic.com/',
  instagramUrl: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
  // Add Shayaan's international-format number after `wa.me/` when supplied.
  whatsappUrl: (message: string) => `https://wa.me/?text=${encodeURIComponent(message)}`,
};

export const coachingPrograms = [
  { slug: 'private-padel-coaching-nairobi', title: 'Private Coaching', audience: 'One player. Fully personalised.', description: "One-to-one training built around your game, goals and individual weaknesses.", focuses: ['Technique and movement', 'Positioning', 'Tactical understanding'], cta: 'View Private Coaching' },
  { slug: 'partner-padel-coaching-nairobi', title: 'Two-Player Coaching', audience: 'Friends, partners or teammates.', description: 'Learn how to move, communicate and construct points together as a pair.', focuses: ['Teamwork', 'Communication', 'Patterns of play'], cta: 'View Partner Coaching' },
  { slug: 'group-padel-coaching-nairobi', title: 'Group Coaching', audience: 'Structured small-group sessions.', description: 'High-energy drills and competitive exercises built around real padel situations.', focuses: ['Point construction', 'Tactical situations', 'Competitive drills'], cta: 'View Group Coaching' },
  { slug: 'match-padel-coaching-nairobi', title: 'Match Coaching', audience: 'Training under match pressure.', description: 'Real-time coaching to improve decisions, momentum and partnership on court.', focuses: ['Shot selection', 'Match awareness', 'Tactical patterns'], cta: 'View Match Coaching' },
];

export const playerJourneys = [
  { title: 'New to Padel', text: 'Never played or just getting started.', cta: 'Start Playing', href: '/coaching/beginner-padel-coaching-nairobi' },
  { title: 'Developing Player', text: 'Know the basics but want more consistency.', cta: 'Improve My Game', href: '/coaching' },
  { title: 'Intermediate', text: 'Ready for better positioning, tactics and shot selection.', cta: 'Train Smarter', href: '/coaching' },
  { title: 'Competitive', text: 'Want match-focused training and advanced tactical development.', cta: 'Improve Match Performance', href: '/coaching/match-padel-coaching-nairobi' },
];

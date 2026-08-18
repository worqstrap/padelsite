export const site = {
  name: 'Shayaan Padel',
  coachName: 'Shayaan',
  tagline: 'Padel Coaching in Nairobi',
  description:
    'Professional padel coaching in Nairobi, Kenya. Private, group and match-play coaching with Shayaan at Ace Padel, Aga Khan Sports Centre.',
  location: 'Nairobi, Kenya',
  coachingVenue: 'Ace Padel',
  coachingVenueAddress: 'Aga Khan Sports Centre, Nairobi',
  domain: 'https://shayaanpadel.co.ke',
  playtomicUrl: 'https://app.playtomic.com/profile/user/6837291?utm_source=app_ios&utm_campaign=share',
  acePadelInstagram: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
  instagram: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
};

export const nav = [
  { label: 'Coaching', href: '/#coaching' },
  { label: 'Ace Padel', href: '/#ace-padel' },
  { label: 'About', href: '/#approach' },
];

export const resourceNav = [
  { label: 'Padel Journal', href: '/blog/', description: 'Coaching advice and Kenya padel stories' },
  { label: 'Find Padel Clubs', href: '/padel-clubs/kenya/', description: 'Compare courts and venues across Kenya' },
];

export const footerNav = {
  coaching: [
    { label: 'Private Coaching', href: '/#coaching' },
    { label: 'Group Coaching', href: '/#coaching' },
    { label: 'Beginner Coaching', href: '/#coaching' },
    { label: 'Match Coaching', href: '/#coaching' },
  ],
  padelKenya: [
    { label: 'Ace Padel', href: '/#ace-padel' },
    { label: 'Book on Playtomic', href: site.playtomicUrl },
    { label: 'Coaching Guides', href: '/#guides' },
    { label: 'Padel Journal', href: '/blog/' },
    { label: 'Find Padel Clubs', href: '/padel-clubs/kenya/' },
  ],
  about: [
    { label: 'Coaching Approach', href: '/#approach' },
    { label: 'Ace Padel', href: '/#ace-padel' },
    { label: 'Contact on Instagram', href: site.instagram },
  ],
};

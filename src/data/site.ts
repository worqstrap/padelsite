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
  whatsappNumber: '254700000000',
  whatsappDefault: 'Hi Shayaan, I found your website and I\'m interested in padel coaching at Ace Padel.',
  playtomicUrl: 'https://app.playtomic.com/profile/user/6837291?utm_source=app_ios&utm_campaign=share',
  acePadelInstagram: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
  instagram: 'https://www.instagram.com/acepadel.ke?igsh=MWUwNndxdzFsMjY2cA==',
  tiktok: '',
  youtube: '',
  email: '',
};

export function whatsappLink(message: string = site.whatsappDefault): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: 'Coaching', href: '#coaching' },
  { label: 'Ace Padel', href: '#ace-padel' },
  { label: 'Find Courts', href: '/padel-courts' },
  { label: 'Learn', href: '/learn' },
  { label: 'About', href: '/about' },
];

export const footerNav = {
  coaching: [
    { label: 'Private Coaching', href: '#coaching' },
    { label: 'Group Coaching', href: '#coaching' },
    { label: 'Beginner Coaching', href: '#coaching' },
    { label: 'Match Coaching', href: '#coaching' },
  ],
  padelKenya: [
    { label: 'Padel Courts', href: '/padel-courts' },
    { label: 'Playtomic Guide', href: '/playtomic-kenya' },
    { label: 'Find a Game', href: '/find-padel-game-nairobi' },
    { label: 'Learn Padel', href: '/learn' },
  ],
  about: [
    { label: 'About Shayaan', href: '/about' },
    { label: 'Ace Padel', href: '/ace-padel' },
    { label: 'Contact', href: whatsappLink('Hi Shayaan, I\'d like to get in touch about padel coaching.') },
  ],
};

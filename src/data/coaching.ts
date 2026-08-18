export interface CoachingProgram {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  focus: string[];
  cta: string;
  image: string;
  alt: string;
}

export const coachingPrograms: CoachingProgram[] = [
  {
    slug: 'private-coaching',
    title: 'Private Coaching',
    shortTitle: 'Private',
    description:
      'One-on-one training built around your individual game. We focus on technique, movement, positioning and tactical understanding — tailored to your specific weaknesses and goals.',
    focus: ['Technique', 'Movement', 'Positioning', 'Tactical understanding', 'Individual weaknesses'],
    cta: 'View Private Coaching',
    image: 'https://images.pexels.com/photos/15612080/pexels-photo-15612080.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Padel player practising a forehand stroke on an outdoor court',
  },
  {
    slug: 'partner-coaching',
    title: 'Two-Player Coaching',
    shortTitle: 'Partner',
    description:
      'Ideal for friends, partners or teammates who want to improve together. Sessions focus on teamwork, communication, positioning and patterns of play as a pair.',
    focus: ['Teamwork', 'Communication', 'Positioning', 'Patterns of play'],
    cta: 'View Partner Coaching',
    image: 'https://images.pexels.com/photos/38031043/pexels-photo-38031043.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Two padel players training together on an indoor court',
  },
  {
    slug: 'group-coaching',
    title: 'Group Coaching',
    shortTitle: 'Group',
    description:
      'Structured coaching for small groups. Drills, point construction, tactical situations and competitive exercises that help you improve while training with others at a similar level.',
    focus: ['Drills', 'Point construction', 'Tactical situations', 'Competitive exercises'],
    cta: 'View Group Coaching',
    image: 'https://images.pexels.com/photos/35248404/pexels-photo-35248404.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Group of padel players preparing for a training session',
  },
  {
    slug: 'match-coaching',
    title: 'Match Coaching',
    shortTitle: 'Match',
    description:
      'Coaching in real match situations. We work on shot selection, positioning, decision making, momentum, communication and tactical patterns — so what you learn in training shows up when it counts.',
    focus: ['Shot selection', 'Positioning', 'Decision making', 'Momentum', 'Communication', 'Tactical patterns'],
    cta: 'View Match Coaching',
    image: 'https://images.pexels.com/photos/37978999/pexels-photo-37978999.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    alt: 'Two players in an intense padel match on a blue indoor court',
  },
];

export interface PlayerLevel {
  number: string;
  title: string;
  description: string;
  cta: string;
  whatsappMessage: string;
}

export const playerLevels: PlayerLevel[] = [
  {
    number: '01',
    title: 'New to Padel',
    description: 'Never played or just getting started.',
    cta: 'Start Playing',
    whatsappMessage: 'Hi Shayaan, I\'m new to padel and would like information about beginner coaching.',
  },
  {
    number: '02',
    title: 'Developing Player',
    description: 'Know the basics but want more consistency.',
    cta: 'Improve My Game',
    whatsappMessage: 'Hi Shayaan, I know the basics of padel but want to improve my consistency. Can you help?',
  },
  {
    number: '03',
    title: 'Intermediate',
    description: 'Want better positioning, tactics and shot selection.',
    cta: 'Train Smarter',
    whatsappMessage: 'Hi Shayaan, I\'m an intermediate padel player looking to improve my positioning and tactics.',
  },
  {
    number: '04',
    title: 'Competitive',
    description: 'Want match-focused training and advanced tactical development.',
    cta: 'Improve Match Performance',
    whatsappMessage: 'Hi Shayaan, I\'m a competitive player looking for match-focused training and tactical development.',
  },
];

export interface PhilosophyStep {
  number: string;
  title: string;
  description: string;
}

export const philosophySteps: PhilosophyStep[] = [
  {
    number: '01',
    title: 'Understand',
    description:
      'Learn why things happen on the padel court. Positioning, decision making and tactical awareness come first — so every shot has a purpose.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'Develop repeatable technique and better movement patterns. Simple, focused progressions make new skills feel natural and hold up under pressure.',
  },
  {
    number: '03',
    title: 'Compete',
    description:
      'Apply what you learn under real match pressure. Translate training into smarter choices, better partnerships and more confidence when the match is on.',
  },
];

export interface Testimonial {
  name: string;
  image: string;
  quote: string;
  level: string;
  rating?: string;
  improvement?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Clear diagnosis',
    image: '',
    quote: 'Start with a focused assessment of your movement, technique and decision-making, then train the areas that will make the biggest difference to your game.',
    level: 'Every coaching plan',
    improvement: 'A clear priority for each session',
  },
  {
    name: 'Purposeful practice',
    image: '',
    quote: 'Work through simple progressions, realistic ball feeds and point-based exercises designed to help new habits hold up when the pace increases.',
    level: 'Technique into match play',
    improvement: 'Drills with a reason behind them',
  },
  {
    name: 'Actionable feedback',
    image: '',
    quote: 'Leave knowing what improved, what to practise next and which tactical cues to use with your partner in your next match.',
    level: 'Progress you can carry forward',
    improvement: 'Practical next steps after every session',
  },
];

export interface CoachingVideo {
  title: string;
  topic: string;
  thumbnail: string;
  alt: string;
  summary: string;
}

export const coachingVideos: CoachingVideo[] = [
  {
    title: 'Beginner Positioning',
    topic: 'Technique',
    thumbnail: 'https://images.pexels.com/photos/35261961/pexels-photo-35261961.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Padel player in ready position on an indoor court',
    summary: 'Recover with your partner, protect the middle and move forward together when the opportunity is clear.',
  },
  {
    title: 'How to Defend Using the Glass',
    topic: 'Technique',
    thumbnail: 'https://images.pexels.com/photos/38090725/pexels-photo-38090725.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Padel player defending against the glass wall',
    summary: 'Let the ball travel, create space from the back wall and use a compact swing to regain control.',
  },
  {
    title: 'When to Attack the Net',
    topic: 'Tactics',
    thumbnail: 'https://images.pexels.com/photos/38347564/pexels-photo-38347564.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Padel player moving forward to attack at the net',
    summary: 'Approach behind a ball that keeps opponents deep, then split-step before they make contact.',
  },
  {
    title: 'Bandeja Technique',
    topic: 'Technique',
    thumbnail: 'https://images.pexels.com/photos/1103829/pexels-photo-1103829.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Padel player preparing for a bandeja shot',
    summary: 'Use a high contact point, controlled slice and balanced recovery to hold your net position.',
  },
  {
    title: 'Partner Positioning',
    topic: 'Tactics',
    thumbnail: 'https://images.pexels.com/photos/34079998/pexels-photo-34079998.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Two padel players coordinating their positioning during a match',
    summary: 'Stay connected side to side so one player presses the ball while the other protects the space.',
  },
  {
    title: 'Serve & Return Strategy',
    topic: 'Match Strategy',
    thumbnail: 'https://images.pexels.com/photos/35646550/pexels-photo-35646550.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Padel racket and ball on a blue court ready for serving',
    summary: 'Serve with a clear first-ball plan; on return, prioritise depth and earn your way toward the net.',
  },
];

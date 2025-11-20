// Centralized personal profile & passions content model
// Draft v2 – more authentic

export const profile = {
  identity: {
    name: 'Gian',
    tagline: 'Still building. Still balancing food and gold. Just with better tools.',
    mission: 'Two wheels, good beer, decent code.'
  },
  narrative: {
    intro: [
      `I grew up playing Age of Empires and honestly, I think that says a lot. Build a population, gather resources, develop tech, balance short- and long-term goals, train patience, react fast when things go sideways.`,
      `A few years later I traded AoE for the GNU/Linux multiverse installing every distro I could find. Pointless? Sure. Fun? Absolutely. My first real programming attempt in high school was truly awful, but I loved using software to solve actual problems.`,
      `From there, tech stuck: side projects, experiments, websites for small businesses, chemical analysis systems. Now I'm a .NET Developer turned Tech Lead at Wolford, designing cloud-native systems that move data across the company and partners. I still handle tech support for family and friends. Obviously.`
    ],
    philosophy: `Do what matters: build things properly. Community over ego. Good coffee, good beer, good roads: the simple stuff done right beats fancy stuff done poorly.`,
    bridge: [
      `When not at work, I'm usually on a motorcycle hunting gorges and mountain passes, or finding breweries worth visiting. Casual Roads is just me and my partner sharing routes that anyone can actually ride, no "epic impossible adventures," just real places we've been.`,
      `Route planning and API design aren't that different... both need flow, edge cases, and a plan for when shit goes wrong.`
    ]
  },
  values: [
    { key: 'honesty', label: 'Honesty of intent and thought' },
    { key: 'reliability', label: 'Quiet reliability' },
    { key: 'consciousness', label: 'Try with consciousness' },
    { key: 'clarity', label: 'Clarity of communication' },
    { key: 'people', label: 'People-centric' },
  ],
  metrics: {
    countriesExplored: 15,
    breweriesVisited: 200,
    pubManaged: 1,
    yearsBuildingSystems: 6,
    routesCurated: 400
  },
  passions: [
    {
      id: 'motorcycling',
      title: 'Motorcycling & Routes',
      tagline: 'Gorges, passes, and roads that don\'t suck.',
      summary: 'Almost everything is exciting on a bike. What\'s unbearable? Long straight industrial roads. I love gorges through rocks, wide open landscapes on hilltops where the horizon feels infinite.',
      long: `Riding lets you DO the trip yourself. You're out there in the world—no car compartment isolating you. You see more, feel more, experience more. It's a 360° thing: sight, touch, hearing, smell, taste. Memorable rides: Bealach Na Bà in Scotland (misty, narrow, emotional), Gorges du Cian in France (red rocks, roller-coaster asphalt), Orrido della Val Taleggio near home (hidden azure-blue gem). Casual Roads is about showing that if we did it, anyone can—no "impossible" BS, just real routes real people can ride.`,
      metrics: { annualKm: 8000, routesCurated: 120 },
      links: [
        { label: 'Instagram', icon: 'fab fa-instagram', url: '#' },
        { label: 'YouTube', icon: 'fab fa-youtube', url: '#' }
      ],
      tags: ['gorges', 'passes', 'authenticity', 'community']
    },
    {
      id: 'craft-beverage',
      title: 'Craft Beer',
      tagline: 'Bitters, porters, whatever works.',
      summary: 'Multi-sensory: taste, smell, mouthfeel, sight. I was a BJCP-trained judge but mostly I just go with the flow now. Context matters—that German Weizen in a biergarten looking at fields was perfect for that moment.',
      long: `Go-to styles: Bitters and Porters, but I'm open. Memorable visits: Oud Berseel's aging cellar (1:1 with the brewer in 2015), Fuller's and Pilsner Urquell for their history, Orval for the woodland setting. GBBF in London is my favorite festival. I ran a beer blog around 2010–2012 when craft wasn't big in Italy, organized blind tastings at my pub. I used to map beers systematically; now I just enjoy them.`,
      metrics: { breweries: 200, pubManaged: 1 },
      links: [],
      tags: ['tasting', 'judging', 'festivals', 'pubs']
    },
    {
      id: 'music',
      title: 'Music',
      tagline: 'Pink Floyd über alles.',
      summary: 'I listen to whatever fits the moment—could be power metal while writing this, R&B tomorrow. Play guitar, tenor sax, some piano and mouth harp. Singing too.',
      long: `Music helps me focus but I really just love it. I listen while doing anything except reading. No genre-to-state mapping—just vibes. Pink Floyd is the peak: no one else nailed so many aspects of music like they did. My running playlist is auto-generated from Spotify's most-played songs of the previous year (synced to my Garmin Fenix 7 since I don't bring my phone).`,
      metrics: { instruments: ['guitar', 'tenor sax', 'piano', 'mouth harp'] },
      links: [],
      tags: ['guitar', 'sax', 'floyd', 'focus']
    },
    {
      id: 'reading',
      title: 'Books',
      tagline: 'Books over blogs.',
      summary: 'Currently in a fiction period but I love technical books and anthropological essays. Deep reading beats skimming twenty blog posts. Aiming for ~18 books/year.',
      long: `Four that influenced me: 1984 by Orwell (obviously great plot and social manifesto, but also freaking well-written literature). Civil Disobedience by Thoreau (powerful, bold, true to himself). The Clean series by Robert C. Martin (crucial for any dev). The Mismeasure of Man by Stephen Jay Gould (scientific debunking of intelligence misconceptions—society needs this). I go with the flow on topics—systems thinking, anthropology, leadership, whatever catches my eye.`,
      metrics: { yearlyTarget: 18 },
      links: [],
      tags: ['fiction', 'technical', 'anthropology', 'depth']
    },
    {
      id: 'photography',
      title: 'Photography',
      tagline: 'Point and shoot.',
      summary: 'Started with street photography as a teenager without money for scenic trips. Still love walking unknown cities with a camera, shooting what catches my eye. Lots of landscapes while traveling, some architecture.',
      long: `I like natural light—blue and golden hours. Street portraits are great but privacy regulations make it tricky so I often skip them. I try to be minimalist with gear (especially on bikes—limited space) but the gear monkey tempts you, you know? I "just" point and shoot; not mature enough for a signature style, I think. But I'm probably not the best judge of my own work.`,
      metrics: { catalogSize: 4000 },
      links: [],
      tags: ['street', 'travel', 'natural-light', 'minimalism']
    },
    {
      id: 'bbq',
      title: 'BBQ',
      tagline: 'Low and slow.',
      summary: 'Smoking with different woods and temperatures. Takes forever but when you get it right, worth it. Some of the best times are just tending the smoker with a beer.',
      long: `BBQ teaches patience—you can't rush a brisket. Currently experimenting with different woods and temp ranges. Sometimes I mess it up, sometimes it's perfect. Just part of the process. The methodical approach (lots of research, identify process, apply, take notes/metrics) comes from my chemistry background—I'm a chemist, after all.`,
      metrics: { hoursSmoking: 300 },
      links: [],
      tags: ['smoking', 'patience', 'experimenting']
    }
  ],
  future: [
    { horizon: 'Right now', focus: ['Drop MVP 👀', 'Casual Roads consistency on IG & YT 📺'] },
    { horizon: 'Next year or two', focus: ['Get better at video editing 🥲', '.NET/Azure talks ☁️'] }
  ]
};

export default profile;

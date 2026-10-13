// All site copy and media lives here so the layout components stay content-agnostic.
// Video sources are royalty-free stock clips (Pexels) hosted on their original CDNs.

const pexels = (id, file) => `https://videos.pexels.com/video-files/${id}/${file}`;
const webflow = (file) => `https://cdn.prod.website-files.com/6659894fd4ee115fbf7b8675%2F${file}`;

export const site = {
  name: 'Andrew Williams',
  shortName: 'AWilliams',
  title: 'AWilliams – Videographer & Storyteller',
  description: 'Andrew Williams is a videographer and storyteller crafting cinematic films for people and brands.',
  email: 'hello@aw.com',
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Works', href: '/#works' },
    { label: 'Contact', href: '/#contact' },
  ],
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
  copyright: '© 2024, All Rights Reserved',
};

export const hero = {
  video: webflow('66598f7361730fd7864c7783_13697046-hd_1920_1080_25fps-transcode.mp4'),
  paragraphs: [
    "Every moment carries a story of its own, and I'm here to help you hold on to yours on film.",
    'Patient, curious, and detail-obsessed, I turn real feelings and fleeting looks into films worth rewatching.',
  ],
};

export const about = {
  heading: 'Coffee, Cameras, and Capturing Memories',
  paragraphs: [
    "I don't just point a camera and press record – I listen first. Every project starts with the people in it: their quirks, their rhythm, the small gestures nobody else notices. I shape those details into honest, cinematic films you'll want to watch again for years.",
    "When the camera is off, you'll find me hiking somewhere without signal, digging through old records, or halfway into a novel. Tell me about your idea – let's build a film that feels like you.",
  ],
  bigVideo: webflow('66599f4855e3347c0f8661e0_4727536-hd_1080_1920_25fps-transcode.mp4'),
  smallVideo: webflow('66599fbfa98a157c80edab6c_4734950-hd_1080_1920_25fps-transcode.mp4'),
};

export const clients = ['Voyager', 'Flourish', 'Muse', 'Emerge', 'Acme'];

export const awards = [
  { name: 'The SOFIES', year: '2024', category: 'Short Narrative', wins: 'X2' },
  { name: 'YouTube Streamy Awards', year: '2024', category: 'Audience Choice', wins: 'X1' },
  { name: 'Vimeo Staff Picks', year: '2024', category: 'Honorable Mention', wins: 'X3' },
  { name: 'Shorty Awards', year: '2023', category: 'Social Video', wins: 'X1' },
];

export const projects = [
  {
    slug: 'off-the-beaten-path',
    name: 'Off the Beaten Path',
    year: '2024',
    category: 'Travel',
    client: 'Emerge',
    summary:
      'A slow road trip through quiet villages, wild hills, and roadside kitchens – a love letter to the places most travel guides forget to mention.',
    overview: [
      'Skip the crowded viewpoints and the queues for the same photo everyone else takes. This film follows a winding route through a corner of Eastern Europe that rarely makes the brochures, where mornings start in fog, lunch is whatever the nearest grandmother is cooking, and every bend in the road opens onto something you did not expect.',
      'We let the pace stay unhurried: cobbled lanes and painted shutters, market stalls stacked with fruit and gossip, long golden evenings on the edge of town. The camera simply keeps up with the rhythm of daily life and lets the place speak for itself.',
    ],
    cover: pexels('5966363', '5966363-hd_1366_720_25fps.mp4'),
    videos: [pexels('1394254', '1394254-hd_1366_720_24fps.mp4'), pexels('5966546', '5966546-hd_1366_720_25fps.mp4')],
  },
  {
    slug: 'streets-come-alive',
    name: 'Streets Come Alive',
    year: '2024',
    category: 'Event',
    client: 'Flourish',
    summary:
      'Raw footwork, packed circles, and fearless solo sets – an event film about the crews who turn concrete and a speaker into a stage.',
    overview: [
      'A borrowed sound system, a patch of open pavement, and a crowd that grows by the minute. This event film captures a city-wide street dance jam from the first warm-up to the last cypher, and the community that keeps it going.',
      'Battles are shot up close and at floor level, so you feel every freeze, every stumble recovered, every grin after a perfect landing. Between rounds we stay with the dancers – the coaching, the trash talk, the hugs that follow.',
      'Solo showcases slow everything down. Without the pressure of an opponent, the performers take risks, and the camera holds on the quieter moments: the breath before the drop, the look to a friend in the crowd, the applause that follows.',
    ],
    cover: pexels('2795730', '2795730-hd_1280_720_25fps.mp4'),
    videos: [pexels('2795744', '2795744-hd_1280_720_25fps.mp4'), pexels('2795748', '2795748-hd_1280_720_25fps.mp4')],
  },
  {
    slug: 'memories-in-motion',
    name: 'Memories in Motion',
    year: '2024',
    category: 'Film Restoration',
    client: 'Voyager',
    summary:
      "Decades-old reels cleaned frame by frame, colour-balanced, and gently scored, so a family's forgotten summers can be watched again with fresh eyes.",
    overview: [
      'A shoebox of home movies arrived scratched, faded, and in places barely holding together. The goal was never to make them look new, but to make them watchable again – to bring back the colour of a birthday dress, the glare of a beach afternoon, the faces of people who are no longer around.',
      'Each reel was scanned, stabilised, and cleaned by hand, with grain kept intact so the footage still feels like it belongs to its decade. A light grade and a new score tie the fragments into a single story without rewriting what was originally captured.',
      'The finished film was premiered at a family reunion, where three generations watched it together. Restoration, in the end, is less about pixels than about giving people a reason to gather around their own history.',
    ],
    cover: pexels('7319503', '7319503-hd_1366_720_25fps.mp4'),
    videos: [pexels('7322217', '7322217-hd_1366_720_25fps.mp4'), pexels('7322219', '7322219-hd_1366_720_25fps.mp4')],
  },
  {
    slug: 'lost-in-the-scroll',
    name: 'Lost in the Scroll?',
    year: '2024',
    category: 'Social',
    client: 'Muse',
    summary:
      'Heads down, thumbs moving, faces lit blue. One person stops, looks up, and notices the world around them – a short social piece about what we miss while we scroll.',
    overview: [
      'A train carriage, a café queue, a crowded square: everywhere, people bent over their phones. This short-form social film starts in that familiar blue glow and holds there just long enough to make you uncomfortable.',
      'Then one person lifts their head. The sound opens up, the colours warm, and suddenly there is a whole world in frame – a street musician, a kid chasing pigeons, a stranger smiling back. Nothing dramatic happens, and that is exactly the point.',
      'Designed to be watched on the very screens it questions, the piece is cut for vertical and square formats and ends on a simple prompt: put the phone down for a minute and see what you find.',
    ],
    cover: pexels('8088612', '8088612-hd_1366_720_25fps.mp4'),
    videos: [pexels('8088943', '8088943-hd_1366_720_25fps.mp4'), pexels('7670218', '7670218-hd_1366_720_25fps.mp4')],
  },
  {
    slug: 'empower',
    name: '#Empower',
    year: '2024',
    category: 'Event',
    client: 'Voyager',
    summary:
      'The keynotes, the hallway conversations, and the late-night ideas that followed – a recap of #Empower2024 and the community that made it worth showing up for.',
    overview: [
      'Three days, two stages, and a few thousand people who came to swap ideas. This recap film for #Empower moves quickly through the big keynote moments, then lingers where the real energy was – in the side rooms, the coffee lines, and the conversations that ran long after the sessions ended.',
      'We followed speakers from the green room to the stage and back, and stayed with attendees as plans formed in real time: new collaborations, unlikely partnerships, and more than a few sketches on napkins.',
      'The result is less a highlight reel than a reminder of why events like this matter – a snapshot of a community that leaves with more momentum than it arrived with.',
    ],
    cover: pexels('3188991', '3188991-hd_1280_720_25fps.mp4'),
    videos: [pexels('6396212', '6396212-hd_1366_576_25fps.mp4'), pexels('6396217', '6396217-hd_1366_576_25fps.mp4')],
  },
];

export const contact = {
  heading: 'Get In Touch',
  formHeading: 'Ready to tell your story?',
  video: webflow('6659e0a4e5a2e3f32d918642_7251768-hd_1080_1920_25fps-transcode.mp4'),
};

export const footer = {
  image: 'https://framerusercontent.com/images/zAP6nQcLWITqbMZrz6ODghrGp4.jpg',
  paragraphs: [
    "To me, a good film isn't a highlight reel. It's the pauses between the big moments, stitched together so the feeling arrives before the words do.",
    'My aim is simple: make something that stays with you long after the screen goes dark, and that does the job you hired it to do.',
  ],
};

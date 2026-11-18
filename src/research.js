// Research areas shown on the home page and the Research page.
// Keep entries at the level of direction and open questions; results go here only once published.
export const researchAreas = [
  {
    id: 'cognitive-architecture',
    title: 'Brain-inspired cognitive architecture',
    short: 'How perception, memory, attention and planning work together in one thinking system.',
    body: 'Most AI systems are a single model doing one job. Brains are different: specialized systems for sensing, remembering, attending and planning, coordinated in real time. We study cognitive architectures that borrow that structure, so machines can combine fast reactive behavior with slower, deliberate reasoning.',
    questions: [
      'How should fast reflexes and slow deliberation share control of one robot?',
      'What role should attention play in deciding what an agent notices and stores?',
      'Which parts of human cognition are worth copying, and which are not?',
    ],
    keywords: ['cognitive architecture', 'brain-inspired AI', 'neuro-symbolic reasoning', 'dual-process cognition'],
  },
  {
    id: 'memory',
    title: 'Memory for autonomous agents',
    short: 'Associative, episodic and semantic memory so machines learn from experience.',
    body: 'Today’s AI forgets almost everything between tasks. We are developing a brain-inspired approach to associative memory, where knowledge is stored as connected units that link, strengthen and fade with use, so an agent can recall the right experience at the right moment. This is our main research direction; details will follow publication.',
    questions: [
      'How can an agent decide what is worth remembering?',
      'How should memories connect, strengthen and fade over time?',
      'How do episodic memories (what happened) become general knowledge?',
    ],
    keywords: ['associative memory', 'episodic memory', 'semantic memory', 'continual learning', 'memory consolidation'],
    flagship: true,
  },
  {
    id: 'perception',
    title: 'Perception for robots',
    short: 'Multimodal sensing that turns cameras, depth, touch and sound into understanding.',
    body: 'A robot is only as capable as what it can perceive. We explore multimodal perception that fuses vision, depth, touch and audio into a shared picture of the world, and grounds language in what the robot actually senses, so instructions like “check the valve by the pump” mean something concrete.',
    questions: [
      'How do we fuse vision, depth, touch and sound into one world model?',
      'How can a robot actively move to see what it needs, instead of waiting?',
      'How do we ground language in perception reliably enough for real work?',
    ],
    keywords: ['robot perception', 'multimodal perception', 'computer vision', 'sensor fusion', 'world models', 'vision-language models'],
  },
  {
    id: 'simulation',
    title: 'Simulation and digital twins',
    short: 'Training and testing in simulated worlds before robots meet the real one.',
    body: 'Real-world robot data is slow and expensive to collect, and mistakes are costly. Simulation lets us train and stress-test agents across thousands of scenarios, generate synthetic data, and build digital twins of real facilities. The hard part is the gap between simulation and reality, and that is where we focus.',
    questions: [
      'How do we close the sim-to-real gap for perception and control?',
      'Can digital twins of real buildings make robot deployment faster and safer?',
      'Which failures can simulation catch before they happen on site?',
    ],
    keywords: ['robot simulation', 'sim-to-real', 'digital twin', 'synthetic data', 'reinforcement learning environments'],
  },
  {
    id: 'embodied-learning',
    title: 'Embodied learning and control',
    short: 'Robots that learn skills from demonstration, practice and feedback.',
    body: 'Intelligence in the physical world has to be learned through a body. We look at learning from demonstration, reinforcement learning and foundation models for robot control, with safety constraints built in from the start rather than added afterwards.',
    questions: [
      'How few demonstrations does a robot need to learn a new task?',
      'How do we keep learning safe when a robot is practicing in the real world?',
      'Where do large robot foundation models help, and where do they fall short?',
    ],
    keywords: ['embodied AI', 'learning from demonstration', 'reinforcement learning', 'robot foundation models', 'robot control'],
  },
  {
    id: 'evaluation',
    title: 'Evaluation, safety and trust',
    short: 'Measuring what intelligent systems can really do, and governing how they are used.',
    body: 'Claims about AI are easy; evidence is harder. We design evaluations that measure capability honestly, study interpretability so people can see why a system acted, and connect research to the governance practices organizations need before autonomous systems go to work.',
    questions: [
      'What should a fair benchmark for robot cognition measure?',
      'How can operators understand and correct an agent’s decisions?',
      'What governance does an organization need before deploying autonomy?',
    ],
    keywords: ['AI evaluation', 'AI safety', 'interpretability', 'AI governance', 'trustworthy AI'],
  },
];

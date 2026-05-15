export const skills = {
  Frontend: {
    icon: '⚛️',
    items: ['Flutter', 'Dart',],
  },
  Backend: {
    icon: '🖥️',
    items: ['Firebase', 'REST APIs', 'Firebase Cloud Messaging (FCM)', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'sqflite', 'JWT Auth',],
  },
  'State Management': {
    icon: '🔄',
    items: ['Provider', 'GetX'],
  },
  'Tools & DevOps': {
    icon: '🛠️',
    items: ['Git & GitHub', 'Postman', 'VS Code', 'Android Stutio'],
  },
  'Cloud & Database': {
    icon: '☁️',
    items: [ 'Firebase', 'Firebase Firestore', 'Firebase Auth', 'Firebase Storage', 'MongoDB Atlas', 'Mongoose', 'SQLite', 'Supabase',],
  },
  'APIs & Services': {
    icon: '🗺️',
    items: ['Google Maps API', 'REST APIs', 'Firebase Cloud Messaging'],
  },
}

export const projects = [
  {
    id: 1,
    image: '/hotel-management.png',
    title: 'Hotel Management App',
    description: 'Complete hotel management system with room booking, real-time database updates, and admin dashboard.',
    tags: ['Flutter', 'Firebase', 'GetX'],
    github: 'https://github.com/zamansadiq1235/Hotel-Mangement-New',
    demo: '',
    featured: true,
  },
  {
    id: 2,
    image: '/hr-management.png',
    title: 'HR Management App',
    description: 'Full-featured HR app covering employee attendance, task tracking, leave, expense and role-based workflows.',
    tags: ['Flutter', 'Firebase', 'GetX'],
    github: 'https://github.com/zamansadiq1235/HR-Management',
    demo: '',
    featured: true,
  },
  {
    id: 3,
    image: '/flashcard-quiz.png',
    title: 'Flashcard Quiz App',
    description: 'Interactive study tool with card-flip animations and local data persistence using SQLite.',
    tags: ['Flutter', 'Provider', 'sqflite'],
    github: 'https://github.com/zamansadiq1235/CodeAlpha_FlashCard-Quiz-App',
    demo: '',
    featured: false,
  },
  {
    id: 4,
    image: '/quotes.png',
    title: 'Random Quote Generator',
    description: 'Minimal Flutter app displaying inspirational quotes with a clean, card-based glassmorphism UI.',
    tags: ['Flutter', 'Provider', 'sqflite'],
    github: 'https://github.com/zamansadiq1235/CodeAlpha_Random_Quote_App',
    demo: '',
    featured: false,
  },
  {
    id: 5,
    image: '/fitness-tracker.png',
    title: 'Fitness Tracker App',
    description: 'Daily fitness tracking for logging workouts and calories with visual progress charts.',
    tags: ['Flutter', 'Provider', 'sqflite'],
    github: 'https://github.com/zamansadiq1235/CodeAlpha_FitnessTracker_App',
    demo: '',
    featured: false,
  },
]

export const experience = [
  {
    role: 'Flutter Developer Intern',
    company: 'CodeAlpha',
    type: 'Internship · Remote',
    period: 'May 2025 – Present',
    points: [
      'Developed three fully functional Flutter apps using Provider and SQLite (sqflite) for local data persistence.',
      'Built a Flashcard Quiz App with card-flip UI, CRUD flashcards, and smooth navigation.',
      'Created a Random Quote Generator with dynamic quotes, author attribution, and minimal UI.',
      'Developed a Fitness Tracker App with workout logging, daily/weekly dashboard, and progress charts.',
    ],
  },
  {
    role: 'Flutter Developer',
    company: '7 Skies Solutions',
    type: 'Full-time',
    period: 'May 2025 – May 2026',
    points: [
      'Developed and deployed multiple cross-platform mobile apps with responsive UIs using Flutter and Firebase.',
      'Created reusable UI components and maintained clean code architecture using MVVM and Provider patterns.',
      'Integrated real-time notifications and in-app messaging using Firebase Cloud Messaging (FCM).',
      'Designed Hotel Management App to automate room booking, guest management, billing, and real-time data sync using Firebase and GetX.',
    ],
  },
]

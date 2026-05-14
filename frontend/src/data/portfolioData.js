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
    emoji: '🏨',
    title: 'Hotel Management App',
    description: 'Complete hotel management system with room booking, check-in/out management, real-time database updates, guest records, billing system, and admin dashboard.',
    tags: ['Flutter', 'Dart', 'Firebase', 'GetX'],
    github: 'https://github.com/zamansadiq1235/Hotel-Mangement-New',
    demo: '',
    featured: true,
  },
  
  {
    id: 2,
    emoji: '🗂️',
    title: 'HR Management App',
    description: 'Full-featured HR app covering employee attendance, task tracking, sprint burnout analysis, and shift scheduling. Includes animated sliver headers, reactive dashboards, and role-based task workflows.',
    tags: ['Flutter', 'Dart', 'GetX', 'Firebase'],
    github: 'https://github.com/zamansadiq1235/HR-Management',
    demo: '',
    featured: true,
  },
  {
    id: 3,
    emoji: '🧠',
    title: 'Flashcard Quiz App',
    description: 'Interactive study tool with card-flip animation, question/answer flashcards, Previous/Next navigation, and full CRUD support. Data persisted locally using SQLite.',
    tags: ['Flutter', 'Dart', 'Provider', 'sqflite'],
    github: 'https://github.com/zamansadiq1235/CodeAlpha_FlashCard-Quiz-App',
    demo: '',
    featured: false,
  },
  {
    id: 5,
    emoji: '💬',
    title: 'Random Quote Generator',
    description: 'Minimal Flutter app that displays a new inspirational quote with author name on each tap. Built with Provider for state management and a clean card-based UI.',
    tags: ['Flutter', 'Dart', 'Provider', 'sqflite'],
    github: 'https://github.com/zamansadiq1235/CodeAlpha_Random_Quote_App',
    demo: '',
    featured: false,
  },
  {
    id: 6,
    emoji: '🏋️',
    title: 'Fitness Tracker App',
    description: 'Daily fitness tracking app for logging workout type, duration, steps, and calories. Includes a dashboard with progress bars and charts for daily and weekly fitness summaries.',
    tags: ['Flutter', 'Dart', 'Provider', 'sqflite'],
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

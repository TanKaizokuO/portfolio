export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'IIITNR Student Hub',
    desc: 'A centralized platform for IIITNR students to collaborate, share resources, and stay updated with campus events.',
    subdesc: 'Built using React.js, Tailwind CSS, and Firebase for real-time updates and seamless user experience.',
    href: 'https://tankaizokuo.github.io/IIIT-NR-Student-hub/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/js.png' },
      { id: 2, name: 'TailwindCSS', path: 'assets/tailwindcss.png' },
      { id: 3, name: 'Git', path: '/assets/git.png' },
    ],
  },
  {
    title: 'Agriculture Robot',
    desc: 'An autonomous robot designed to assist in precision farming, monitoring soil health, and optimizing irrigation.',
    subdesc: 'Utilizing AI and IoT, the robot provides real-time data analysis for better crop management.',
    href: '#',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.jpeg' },
      { id: 2, name: 'IoT', path: '/assets/IoT.jpg' },
      { id: 3, name: 'Machine Learning', path: '/assets/machinelearning.jpg' },
    ],
  },
  {
    title: 'Stock Market Prediction using Sentiment Analysis',
    desc: 'A predictive model that analyzes social media sentiment to forecast stock market trends.',
    subdesc: 'Built with NLP techniques and deep learning models to provide accurate stock predictions.',
    href: '#',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'Python', path: '/assets/python.jpeg' },
      { id: 2, name: 'NLP', path: '/assets/machinelearning.jpg' },
      { id: 3, name: 'Deep Learning', path: '/assets/deeplearning.jpg' },
    ],
  },
  {
    title: 'Proxy Proof Smart Attendance',
    desc: 'A smart attendance system that eliminates proxy attendance using facial recognition technology.',
    subdesc: 'Leveraging AI-powered face detection to ensure accurate and secure attendance tracking.',
    href: '#',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'Firebase', path: '/assets/firebase.png' },
      { id: 2, name: 'AI', path: '/assets/deeplearning.jpg' },
      { id: 3, name: 'Cloud Deployment', path: '/assets/cloud.jpg' },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Freelance & Personal Projects',
    pos: 'Full-Stack Developer',
    duration: 'Ongoing',
    title:
      'Developed and deployed multiple web applications, ranging from e-commerce platforms and social media sites to personal blogs and portfolio websites.',
    icon: '/assets/code.png',
    animation: 'typing',
  },
  {
    id: 2,
    name: 'Open Source Contributions',
    pos: 'Contributor',
    duration: 'Ongoing',
    title:
      'Actively contributed to open-source projects, improving functionality, fixing bugs, and optimizing performance in web and AI-based applications.',
    icon: '/assets/github.svg',
    animation: 'merge',
  },
  {
    id: 3,
    name: 'Aspiring ML Engineer',
    pos: 'Student',
    duration: 'Ongoing',
    title:
      'Currently pursuing a degree in Computer Science with a focus on Machine Learning and Artificial Intelligence. Completed various online courses and certifications in ML and AI.',
    icon: '/assets/machinelearning.jpg',
    animation: 'cheer',
  },
];

import type { NewsCardProps } from '@/components/site/news-card';
import type { VideoCardProps } from '@/components/site/video-card';
import type { MaterialCardProps } from '@/components/site/material-card';

export const studentProjects: NewsCardProps[] = [
  {
    id: 'proj1',
    category: 'Audio-Visual',
    headline: 'Documentary: The Lifeline of a City',
    description: 'A short documentary exploring the daily lives of commuters on the city\'s metro.',
    image: 'https://picsum.photos/seed/project1/600/400',
    imageHint: 'documentary film',
    link: '/student-projects/audio-visual',
  },
  {
    id: 'proj2',
    category: 'Web Stories',
    headline: 'Interactive Report: The Urban Heat Island Effect',
    description: 'An in-depth multimedia article about the rising temperatures in urban centers.',
    image: 'https://picsum.photos/seed/project2/600/400',
    imageHint: 'city journalism',
    link: '/student-projects/web-journalism',
  },
  {
    id: 'proj3',
    category: 'News Letter',
    headline: 'Campus Chronicle: The Anniversary Edition',
    description: 'A special edition newspaper celebrating 25 years of the university.',
    image: 'https://picsum.photos/seed/project3/600/400',
    imageHint: 'print newspaper',
    link: '/student-projects/print-media',
  },
    {
    id: 'proj4',
    category: 'Audio Podcasts',
      headline: 'Podcast: "Tech Talks" - Technology in Everyday Life',
      description: 'An interview with a leading researcher on the future of digital innovation.',
    image: 'https://picsum.photos/seed/project4/600/400',
    imageHint: 'podcast microphone',
    link: '/student-projects/audio-podcasts',
  },
    {
    id: 'proj5',
    category: 'Campaigns',
    headline: 'Campaign: "Green Campus" Initiative',
    description: 'A comprehensive PR campaign to promote sustainability on campus.',
    image: 'https://picsum.photos/seed/project5/600/400',
    imageHint: 'green campus',
    link: '/student-projects/pr-advertising',
  },
    {
    id: 'proj6',
    category: 'Audio-Visual',
    headline: 'Short Film: "Crossroads"',
    description: 'A narrative short film about a life-changing decision made by a young student.',
    image: 'https://picsum.photos/seed/project6/600/400',
    imageHint: 'short film production',
    link: '/student-projects/audio-visual',
  },
];

export const documentaryAndShortFilms: VideoCardProps[] = [
  {
    id: '1',
    title: 'The Silent Guardians of the Himalayas',
    subject: 'Documentary',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc1/400/225',
    imageHint: 'himalayas mountain'
  },
  {
    id: '2',
    title: 'Short Film: "The Last Letter"',
    subject: 'Short Film',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc2/400/225',
    imageHint: 'old letter'
  },
  {
    id: '3',
    title: 'Beneath the Waves: A Coral Reef Story',
    subject: 'Documentary',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc3/400/225',
    imageHint: 'coral reef'
  },
  {
    id: '4',
    title: 'PSA: The Importance of Digital Literacy',
    subject: 'Public Service Video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc4/400/225',
    imageHint: 'digital literacy'
  },
  {
    id: '5',
    title: 'Interview with a War Veteran',
    subject: 'Interview',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc5/400/225',
    imageHint: 'war veteran'
  },
  {
    id: '6',
    title: 'Short Film: "Echoes in the Hallway"',
    subject: 'Short Film',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc6/400/225',
    imageHint: 'empty hallway'
  },
  {
    id: '7',
    title: 'The Art of Street Food: A Culinary Journey',
    subject: 'Documentary',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc7/400/225',
    imageHint: 'street food'
  },
    {
    id: '8',
    title: 'News Package: Local Elections 2024',
    subject: 'News Package',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/doc8/400/225',
    imageHint: 'election day'
  },
];

export const studyMaterials: MaterialCardProps[] = [
  {
    id: '1',
    title: 'Data Structures & Algorithms Notes',
    subject: 'Computer Science',
    type: 'PDF',
    link: '#',
  },
  {
    id: '2',
    title: 'Thermodynamics Lecture Slides',
    subject: 'Mechanical Engineering',
    type: 'Slides',
    link: '#',
  },
  {
    id: '3',
    title: 'Organic Chemistry Reference Links',
    subject: 'Chemistry',
    type: 'Link',
    link: '#',
  },
  {
    id: '4',
    title: 'Modern Physics Full Course Notes',
    subject: 'Physics',
    type: 'PDF',
    link: '#',
  },
   {
    id: '5',
    title: 'Digital Signal Processing Code Samples',
    subject: 'Electronics',
    type: 'Code',
    link: '#',
  },
   {
    id: '6',
    title: 'Indian Polity Mind Maps',
    subject: 'General Studies',
    type: 'PDF',
    link: '#',
  },
];

export const competitions: { id: string; name: string; organizer: string; deadline: string; eligibility: string; link: string; }[] = [
  {
    id: '1',
    name: 'Innovate India Hackathon 2024',
    organizer: 'Ministry of Education',
    deadline: '2024-10-15',
    eligibility: 'All college students',
    link: '#',
  },
  {
    id: '2',
    name: 'National Coding Olympiad',
    organizer: 'CodeMasters Inc.',
    deadline: '2024-09-30',
    eligibility: 'Undergraduate students',
    link: '#',
  },
  {
    id: '3',
    name: 'Future Leaders Scholarship',
    organizer: 'Global Foundation',
    deadline: '2024-11-01',
    eligibility: 'Final year students',
    link: '#',
  },
    {
    id: '4',
    name: 'GATE 2025 Registration',
    organizer: 'IIT Bombay',
    deadline: '2024-09-28',
    eligibility: 'Engineering Graduates/Final Year',
    link: '#',
  },
];

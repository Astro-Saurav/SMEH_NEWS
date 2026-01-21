import type { NewsCardProps } from '@/components/site/news-card';
import type { VideoCardProps } from '@/components/site/video-card';
import type { MaterialCardProps } from '@/components/site/material-card';
import type { CompetitionCardProps } from '@/components/site/competition-card';

export const newsItems: NewsCardProps[] = [
  {
    id: '1',
    category: 'Sports',
    headline: 'University Eagles Win National Championship',
    description: 'A stunning victory for the university\'s basketball team in the final seconds of the game.',
    image: 'https://picsum.photos/seed/news1/600/400',
    imageHint: 'college basketball',
    link: '#',
  },
  {
    id: '2',
    category: 'Technology',
    headline: 'New AI Research Lab Opens on Campus',
    description: 'The new state-of-the-art facility will focus on machine learning and robotics.',
    image: 'https://picsum.photos/seed/news3/600/400',
    imageHint: 'robotics lab',
    link: '#',
  },
  {
    id: '3',
    category: 'Education',
    headline: 'Revised Curriculum for Engineering Students',
    description: 'The engineering department introduces a new curriculum to meet industry demands.',
    image: 'https://picsum.photos/seed/news4/600/400',
    imageHint: 'engineering student',
    link: '#',
  },
    {
    id: '4',
    category: 'Politics',
    headline: 'Student Body Elections See Record Turnout',
    description: 'This year\'s student government elections have seen the highest voter participation in a decade.',
    image: 'https://picsum.photos/seed/news2/600/400',
    imageHint: 'student election',
    link: '#',
  },
    {
    id: '5',
    category: 'World & National',
    headline: 'Students Participate in National Climate Summit',
    description: 'A delegation of students represented the university at the annual climate change summit.',
    image: 'https://picsum.photos/seed/news5/600/400',
    imageHint: 'climate summit',
    link: '#',
  },
    {
    id: '6',
    category: 'Campus Life',
    headline: 'Annual Cultural Fest "Vibrations" a Grand Success',
    description: 'The three-day cultural extravaganza featured over 50 events and thousands of participants.',
    image: 'https://picsum.photos/seed/news6/600/400',
    imageHint: 'cultural festival',
    link: '#',
  },
];

export const lectureItems: VideoCardProps[] = [
  {
    id: '1',
    title: 'Introduction to Python for Beginners',
    subject: 'Programming',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture1/400/225',
    imageHint: 'python code'
  },
  {
    id: '2',
    title: 'Fundamentals of Mechanical Engineering',
    subject: 'Engineering',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture2/400/225',
    imageHint: 'mechanical gear'
  },
  {
    id: '3',
    title: 'Quantum Physics Explained Simply',
    subject: 'Science',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture3/400/225',
    imageHint: 'atom model'
  },
  {
    id: '4',
    title: 'Strategies for Competitive Exam Success',
    subject: 'Competitive Exams',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture4/400/225',
    imageHint: 'exam paper'
  },
  {
    id: '5',
    title: 'Modern World History: A Primer',
    subject: 'General Studies',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture5/400/225',
    imageHint: 'history map'
  },
  {
    id: '6',
    title: 'Data Structures and Algorithms',
    subject: 'Programming',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture6/400/225',
    imageHint: 'binary tree'
  },
  {
    id: '7',
    title: 'Basics of Electrical Circuits',
    subject: 'Engineering',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture7/400/225',
    imageHint: 'circuit board'
  },
    {
    id: '8',
    title: 'Advanced Calculus for Engineers',
    subject: 'Science',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/lecture8/400/225',
    imageHint: 'math formula'
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

export const competitions: CompetitionCardProps[] = [
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

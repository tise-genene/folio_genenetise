// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  LaravelIcon,
  NextjsIcon,
  NodejsIcon,
  ReactIcon,
  SocketIcon,
  TailwindCSS,
  TypescriptIcon,
} from '../utils/icons'

// Project Data
export const projects = [
  {
    priority: 1,
    title: 'HRMS (Human Resource Management System) for Yekatit 12 Hospital',
    shortDescription:
      'Developed a comprehensive Human Resource Management System (HRMS) for Yekatit 12 Hospital, a leading healthcare provider in Ethiopia. This project, built with HTML, CSS, JavaScript, PHP-CodeIgniter, and MySQL, streamlines HR processes including employee management, payroll, and performance tracking. The system enhances operational efficiency and improves administrative workflows within the hospital, ensuring a more organized and effective HR department.',
    cover:
      'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Client Work 🙍‍♂️',
    githubLink: 'https://github.com/tise-genene/HR_Process_Optimizer',
  },
  {
    priority: 2,
    title: 'Laravel Restaurant Reservation System',
    shortDescription:
      'Developed a sophisticated Restaurant Reservation System as part of a semester final project for the Staffs Restaurant at Addis Ababa University. Built with Laravel, this system allows users to reserve seats, lunches, dinners, and even bedrooms seamlessly. It offers a user-friendly interface and robust backend management for restaurant operations, providing a modern solution for hospitality management and customer service.',
    cover:
      'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'Client Work 🙍‍♂️',
    skills: 'Laravel · Back-End Web Development · Databases · MySQL',
    githubLink: 'https://github.com/tise-genene/Laravel-Restaurant-Reservation-System-project',
  },
  {
    priority: 3,
    title: 'Student-Tutor Marketplace Platform',
    shortDescription:
      'A Next.js-based tutor marketplace platform built with TypeScript, Prisma, and PostgreSQL that enables students to find and book tutors, featuring real-time messaging, notifications, and a comprehensive booking system.',
    cover:
      'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    skills: 'Next.js · TypeScript · Prisma · PostgreSQL',
    githubLink: 'https://github.com/tise-genene/tutor-marketplace',
    livePreview: 'tutor-marketplace.vercel.app',
  },
  {
    priority: 3,
    title: 'ScholarPath',
    shortDescription:
      'Developed a comprehensive scholarship counseling platform featuring real-time booking system for counseling sessions, integrated Learning Management System (LMS) for course delivery, and premium video content management.',
    cover:
      'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pZGVvfHx8fGVufDB8fHx8fA%3D%3D',
    type: 'New 🔥',
    skills: 'Next.js 15 · TypeScript · React 19 · Tailwind CSS',
    githubLink: 'https://github.com/tise-genene/scholarpath',
    livePreview: 'scholarpath-omega.vercel.app',
  },
]

// Service Data
export const serviceData = [
  {
    icon: NextjsIcon,
    title: 'Full Stack Development [Next.js]',
    shortDescription: 'Building modern, scalable applications with Next.js and TypeScript.',
  },
  {
    icon: LaravelIcon,
    title: 'Laravel Backend [PHP]',
    shortDescription: 'Creating robust enterprise applications with Laravel.',
  },
  {
    icon: SocketIcon,
    title: 'Real-time Systems [WebSocket]',
    shortDescription: 'Developing real-time applications with WebSocket and Socket.io.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend [Express]',
    shortDescription: 'Building efficient server-side applications with Node.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development',
    shortDescription: 'Creating type-safe, maintainable applications with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Modern UI Design',
    shortDescription: 'Crafting beautiful, responsive interfaces with Tailwind CSS.',
  },
  {
    icon: ExpressjsIcon,
    title: 'Web Platform Architecture',
    shortDescription: 'Building scalable web platforms and SaaS applications.',
  },
  {
    icon: ReactIcon,
    title: 'Frontend Engineering',
    shortDescription: 'Creating interactive user experiences with React.js.',
  },
  {
    icon: NextjsIcon,
    title: 'SaaS Solutions',
    shortDescription: 'Building enterprise-grade SaaS platforms with multi-tenant architecture.',
  }
]

// Skill List
export const skillList = [
  {
    name: 'JavaScript',
    icon: JavaScriptIcon,
  },
  {
    name: 'TypeScript',
    icon: TypescriptIcon,
  },
  {
    name: 'React.js',
    icon: ReactIcon,
  },
  {
    name: 'Next.js',
    icon: NextjsIcon,
  },
  {
    name: 'Node.js',
    icon: NodejsIcon,
  },
  {
    name: 'Express.js',
    icon: ExpressjsIcon,
  },
  {
    name: 'Laravel',
    icon: LaravelIcon,
  },
  {
    name: 'Socket.io',
    icon: SocketIcon,
  },
]

export const testimonials = [
  {
    id: 'test-1',
    name: 'Tegegn T.',
    role: 'Founder & CEO',
    company: 'ScholarPath',
    feedback: 'Genene played a crucial role in developing our scholarship counseling platform. His expertise in Next.js 15 and TypeScript helped us build a scalable solution that connects students with quality counseling services. His attention to detail and ability to deliver high-quality code under tight deadlines made him an invaluable asset to our team.',
    stars: 5,
    createdAt: '2024-12-01',
    image: 'https://images.unsplash.com/photo-1519345182560-9f710cd51c91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'test-2',
    name: 'Yohannes K.',
    role: 'Full Stack Developer',
    company: 'Upwork',
    feedback: 'I had the pleasure of collaborating with Genene on several full-stack projects through Upwork. His technical expertise in both frontend and backend development is impressive. He consistently delivered high-quality code and was proactive in solving complex problems. His ability to work independently while maintaining excellent communication made him a great teammate.',
    stars: 5,
    createdAt: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1519345182560-9f710cd51c91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 'test-3',
    name: 'Mickel Y.',
    role: 'Technical Lead',
    company: 'TechRise Solutions',
    feedback: 'Genene demonstrated exceptional problem-solving skills during our collaboration on a real-time messaging system. His expertise in Socket.io and TypeScript helped us build a robust solution that handled thousands of concurrent users. His attention to detail and ability to optimize performance were key to our project\'s success.',
    stars: 5,
    createdAt: '2024-09-20',

  }
]

export const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Projects', href: '#projects' },
  { title: 'Testimonials', href: '#testimonials' },
  {
    title: 'Blogs',
    href: '#blogs',
  },
  {
    title: 'Services',
    href: '#services',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

export const themes = [
  {
    name: 'Light',
    colors: ['#fff', '#1a237e', '#e8eaf6', '#1a237e', '#42a5f5'], // Indigo theme
  },
  {
    name: 'Dark',
    colors: ['#121212', '#616161', '#1a237e', '#42a5f5', '#bbdefb'], // Dark indigo theme
  }
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']

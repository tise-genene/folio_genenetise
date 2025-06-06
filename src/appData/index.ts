// Data for portfolio
import {
  ExpressjsIcon,
  JavaScriptIcon,
  LaravelIcon,
  NestjsIcon,
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
    priority: 4,
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
    icon: ReactIcon,
    title: 'Web Application Development [React.js, Next.js]',
    shortDescription: 'Building modern, responsive web applications with React.js and Next.js.',
  },
  {
    icon: NextjsIcon,
    title: 'Full Stack Development [Next.js, Node.js]',
    shortDescription: 'End-to-end web solutions using Next.js, Node.js, and modern databases.',
  },
  {
    icon: LaravelIcon,
    title: 'Laravel Backend Development [PHP, Laravel]',
    shortDescription: 'Building robust and scalable PHP applications with Laravel.',
  },
  {
    icon: NodejsIcon,
    title: 'Node.js Backend Development [Node.js, Express]',
    shortDescription: 'Creating efficient and scalable server-side applications with Node.js.',
  },
  {
    icon: TypescriptIcon,
    title: 'TypeScript Development [TypeScript]',
    shortDescription: 'Building type-safe and maintainable applications with TypeScript.',
  },
  {
    icon: TailwindCSS,
    title: 'Modern UI Development [Tailwind CSS]',
    shortDescription: 'Creating beautiful, responsive interfaces with Tailwind CSS.',
  },
  {
    icon: ExpressjsIcon,
    title: 'Web Platform Development [Express.js, Node.js]',
    shortDescription: 'Building scalable web platforms and SaaS applications.',
  },
  {
    icon: SocketIcon,
    title: 'Real-time Applications [WebSocket, Socket.io]',
    shortDescription: 'Developing real-time features with WebSockets and Socket.io.',
  },
  {
    icon: NextjsIcon,
    title: 'SaaS Platform Development [Next.js, Node.js]',
    shortDescription: 'Building scalable SaaS platforms with multi-tenant architecture and subscription management.',
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
    name: 'John Doe',
    role: 'Software Developer',
    company: 'Tech Company',
    feedback: 'Great portfolio! It really showcases your skills and projects effectively.',
    stars: 5,
    createdAt: '2024-06-06',
    image: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jane Smith',
    role: 'Frontend Developer',
    company: 'Web Solutions',
    feedback: 'Impressive work! Your projects demonstrate excellent technical skills and attention to detail.',
    stars: 5,
    createdAt: '2024-06-06',
    image: 'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
    colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
  },
  {
    name: 'Dark',
    colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
  }
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']

export interface Project {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    link: string;
    links?: string;
  }
  
  export const projects: Project[] = [
    {
      title: 'Sudoku Solver',
      description: 'Sudoku solver, AWS Lambda, JavaScript, React.',
      imageUrl: 'projects/pr_sudoku.png',
      technologies: ['React', 'AWS', 'JavaScript'],
      link: 'sudoku-solver', // Update links to be unique routes
      links: 'https://sudoku.p4elkab35t.tech'
    },
    {
      title: 'Vancouver Tech Week 2024 Hackathon',
      description: 'Hackathon project, event system on next.js.',
      imageUrl: 'projects/pr_vtw2024.png',
      technologies: ['Nextjs', 'React', 'JavaScript'],
      link: 'vancouver-tech-week', // Update links to be unique routes
      links: 'https://vtw2024.p4elkab35t.tech'
    },
    {
      title: 'TG Bots',
      description: 'Various telegram bots via telegram bots API, using JavaScript, hosted on Cloudflare Workers.',
      imageUrl: 'projects/pr_bots.png',
      technologies: ['Cloudflare', 'Telegram', 'JavaScript'],
      link: 'tg-bots', // Update links to be unique routes
    },
    {
      title: 'Phone Beautifier',
      description: 'Phone beautifier, JavaScript, React.',
      imageUrl: 'projects/pr_phone.png',
      technologies: ['React', 'JavaScript', 'cloudflare'],
      link: 'phone-beautifier', // Update links to be unique routes
      links: 'https://phone-word.p4elkab35t.tech', // Update links to be unique routes
    }
  ];
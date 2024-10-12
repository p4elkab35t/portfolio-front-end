<!-- Skills.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import AnnotationMark from "$lib/components/annotationMark.svelte";

    interface Skill {
      name: string;
      icon: string;
      level: number;
      description: string;
    }
    
  export let skillsLeft: Skill[] = [
  {
    name: 'AWS',
    icon: 'aws',
    level: 80,
    description: 'Designed and implemented serverless backend functions using AWS Lambda, and optimized secure data storage with AWS S3 for scalable performance.'
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    level: 85,
    description: 'Strong background in JavaScript for building interactive web apps, reinforced by experience in refactoring code to boost performance by 15%.'
  },
  {
    name: 'Git',
    icon: 'git',
    level: 90,
    description: 'Utilized Git for version control, ensuring smooth collaboration with teams on various projects, with emphasis on code quality and maintenance.'
  },
  {
    name: 'HTML5',
    icon: 'html5',
    level: 95,
    description: 'Developed responsive, semantic web pages using HTML5, focusing on user-friendly interfaces and cross-platform compatibility.'
  },
  {
    name: 'CSS3',
    icon: 'css3',
    level: 85,
    description: 'Skilled in modern CSS3 techniques for creating visually appealing and responsive designs, with experience in styling both web and mobile apps.'
  }
];


export let skillsRight: Skill[] = [
  {
    name: 'TypeScript',
    icon: 'typescript',
    level: 85,
    description: 'Led development of a cross-platform mobile app using TypeScript, enhancing performance and code maintainability through efficient state management.'
  },
  {
    name: 'React',
    icon: 'react',
    level: 90,
    description: 'Spearheaded frontend development with React, building high-performance user interfaces and collaborating closely with design teams for seamless UX.'
  },
  {
    name: 'Python',
    icon: 'python',
    level: 75,
    description: 'Worked on neural network-based computer vision projects using Python and PyTorch, including implementing covert channels and ML algorithms.'
  },
  {
    name: 'SQL',
    icon: 'sql',
    level: 85,
    description: 'Extensive experience in relational database design and management, with hands-on work using MySQL and Microsoft SQL Server for data analysis.'
  },
  {
    name: 'Svelte',
    icon: 'svelte',
    level: 70,
    description: 'Developed reactive and highly optimized web applications using Svelte, focusing on lightweight frameworks for enhanced performance.'
  }
];


  let hasAnimated = false;

  onMount(() => {
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            // Start the animation when the section becomes visible
            document.querySelectorAll('.progress-bar').forEach((bar) => {
              const targetLevel = bar.getAttribute('data-level');
              (bar as HTMLElement).style.width = `${targetLevel}%`;
              console.log('Animating skill bar');
            });
            hasAnimated = true; // Prevent animation from restarting when re-scrolled
          }
        },
        {root: null, threshold: 0.2 }
      );

      const sectionElement = document.getElementById('skills-section');
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    }
  });
  </script>
  
    <div id="skills-section" class="flex flex-col place-content-center md:flex-row  h-full w-full max-w-6xl">
      <div class="w-full md:h-full flex flex-col md:justify-around md:px-4 md:mb-4 md:mb-0">
      {#each skillsLeft as skill}
      <div class="flex flex-row">
        <img src={`/icons/${skill.icon}.svg`} alt={skill.name} class="h-8 w-8 mr-5 mt-3" />
        <div class="mb-6 w-full">
            <div class="flex justify-between items-center mb-2">
              <AnnotationMark description={skill.description} font_size="1">{skill.name}</AnnotationMark>
              <span class="text-sm text-gray-600">{skill.level}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 md:h-3">
              <div
                class="progress-bar bg-black h-1.5 md:h-3 rounded-full transition-all duration-1000 ease-in-out"
                style="width: 0"
                data-level={skill.level}
              ></div>
            </div>
          </div>
      </div>
      {/each}
      </div>
      <div class="md:h-full flex flex-col md:justify-around w-full w-1/2 md:px-4">
      {#each skillsRight as skill}
      <div class="flex flex-row md:flex-row-reverse">
        <img src={`/icons/${skill.icon}.svg`} alt={skill.name} class="h-8 w-8 mr-5 md:ml-5 mt-3" />
        <div class="mb-6 w-full">
          <div class="flex justify-between items-center mb-2 flex-row md:flex-row-reverse">
            <AnnotationMark description={skill.description} font_size="1">{skill.name}</AnnotationMark>
            <span class="text-sm text-gray-600">{skill.level}%</span>
          </div>
          <div class="flex flex-row md:flex-row-reverse w-full bg-gray-200 rounded-full h-1.5 md:h-3">
            <div
              class="progress-bar bg-black h-1.5 md:h-3 rounded-full transition-all duration-1000 ease-in-out"
              style="width: 0"
              data-level={skill.level}
            ></div>
          </div>
        </div>
      </div>
      {/each}
      </div>
    </div>
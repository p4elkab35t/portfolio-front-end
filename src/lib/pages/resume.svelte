<!-- CV.svelte -->
<script lang="ts">

  $: isVisible = false;


    const inView = (node: HTMLElement | null)=>{
        const options = {
            root: null,
            threshold: 0.2,
            margin: '0px'
        }
        const observer = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                isVisible = true;
                observer.disconnect();
                console.log('PageBlock is in view');
            }
        }, options)

        if(!node) return;

        observer.observe(node)
    }
    
    interface TimelineItem {
      date: string;
      title: string;
      company: string;
      description: string;
    }
    
    export let experiences: TimelineItem[] = [
      {
        date: '2024 - 2024',
        title: 'Solution Developer',
        company: 'Start Consulting, Canada',
        description: `- Collaborated with a team of 7 developers to build and launch a cross-platform mobile app using TypeScript and React Native, reaching over 100+ beta users in the first month of testing.
- Developed and optimized key app features, improving overall performance by 15% through code refactoring, efficient state management, and enhanced responsiveness.
Designed and implemented serverless backend functions using AWS Lambda, ensuring scalable and efficient processing of user requests and app data.
- Managed secure data storage and retrieval via AWS S3, optimizing the system for fast access and reliability across various app features.
- Led frontend development with React, collaborating closely with designers to create a seamless, user-friendly interface and ensuring high performance on multiple platforms.
- Contributed to Agile workflows, actively participating in sprint planning, performing code reviews, and ensuring high-quality code maintenance using Git for version control and collaboration.`
      },
      {
        date: '2020 - 2023',
        title: 'Computer Technical Specialist',
        company: 'INITER - SERVICE, Russia',
        description: `- Provided comprehensive technical support for small and medium-sized businesses, ensuring smooth operations across a variety of IT and computer-related fields.\n \
- Diagnosed and repaired hardware issues, including PCs, peripherals, and internal components such as motherboards, hard drives, and BIOS configurations.\n \
- Troubleshot and resolved software and application issues, improving system performance and reducing downtime for business-critical applications.\n \
- Set up and maintained network infrastructure, including configuring routers, switches, and troubleshooting connectivity issues.\n \
- Performed routine maintenance and upgrades on computer systems, ensuring hardware longevity and optimal performance for clients.\n \
- Delivered on-site support and collaborated with teams to resolve technical challenges in a timely manner, meeting business needs and minimizing operational disruptions.`
      },
      {
        date: '2018 - 2023',
        title: 'Master\’s Degree in Information Security',
        company: 'Saint Petersburg State University of Aerospace Instrumentation, Russia',
        description: `- Telegram Bots for automation tasks (Node.js),
- Online Archive App for zipping folders (Node.js, Express, Vue),
- To-Do List with Agile methodologies (MySQL, Node.js, Angular),
- C# Threat Monitoring System, sending data via RabbitMQ to Microsoft SQL Server (C#, RabbitMQ).
- Worked on Neurovision Project using neural networks for computer vision (Python, PyTorch). Strong experience in low-level programming: studied Assembly for a year, followed by six months of C language. Gained deep knowledge of computer networks and completed a diploma on Covert Channels in Python. Mastered relational databases and worked on group projects using Agile and Git for collaboration and version control.`
      },
      // Add more experiences as needed
    ];
  </script>

  <style>
    .afterStroke {
      position: absolute;
      background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      bottom: 150px;
      height: 1vh;
      width: 1px;
    }
    .cardTransition {
      transition: all 0.6s ease;
    }

    .cardTransition.card0 {
      transition-delay: 0ms;
    }

    .cardTransition.card1 {
      transition-delay: 300ms;
    }

    .cardTransition.card2 {
      transition-delay: 600ms;
    }

    .cardTransition.card3 {
      transition-delay: 900ms;
    }

    .cardTransition.card4 {
      transition-delay: 1200ms;
    }


  </style>

    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-0 md:left-1/2 top-0 h-full w-px bg-black">
        <div class="afterStroke">
          <svg viewBox="249.5 0 1 467.177" height="250" xmlns="http://www.w3.org/2000/svg">
            <rect x="249.584" width="0.833" height="131.265" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
            <rect x="249.5" y="139.618" width="1" height="92.482" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
            <rect x="249.5" y="240.453" width="1" height="68.616" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
            <rect x="249.5" y="319.358" width="1" height="41.169" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0); transform-origin: 250px 339.943px;"></rect>
            <rect x="249.75" y="363.366" width="1" height="23.27" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, -0.25, 9.793926239013672)"></rect>
            <rect x="249.75" y="391.398" width="1" height="8.353" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, -0.25, 17.00334358215332)"></rect>
            <rect x="249.5" y="463" width="1" height="4.177" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
            <rect x="249.5" y="448" width="1" height="4.177" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
            <rect x="249.5" y="430" width="1" height="4.177" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" transform="matrix(1, 0, 0, 1, 0, 3.552713678800501e-15)"></rect>
          </svg>
        </div>
      </div>
      
      <div class="space-y-10" use:inView>
        {#each experiences as item, i}
          <div class="relative flex flex-col md:flex-row {i % 2 === 0 ? 'md:flex-row-reverse' : ''}">
            <!-- Dot -->
            <div class="absolute left-[-8px] md:left-1/2 md:transform md:-translate-x-1/2 top-0 w-4 h-4 bg-black rounded-full"></div>
            
            <!-- Content -->
            <div class="md:w-1/2 {i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} {isVisible?"opacity-100 ml-8 md:ml-0":"opacity-0 -ml-10 md:-ml-10"} cardTransition card{i}">
              <div class="bg-gray-100 p-5 rounded">
                <div class="font-bold mb-2">{item.date}</div>
                <h3 class="text-xl font-bold mb-1">{item.title}</h3>
                <div class="text-gray-600 mb-2">{item.company}</div>
                <p class="text-gray-800" style="white-space: pre-wrap;">{item.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
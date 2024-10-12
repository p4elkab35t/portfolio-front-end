<!-- Projects.svelte -->
<script lang="ts">
    import { goto } from '$app/navigation';
    import { projects } from '$lib/pages/projects_fn';

    interface Project {
      title: string;
      description: string;
      imageUrl: string;
      link: string;
    }
    
  </script>
  
    <div class="grid md:grid-cols-2 gap-10">
      {#each projects as project}
        <div class="border border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <div class="h-48 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              class="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div class="p-5">
            <h3 class="text-xl font-bold mb-2">{project.title}</h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <a 
              href="/{project.link}" 
              class="text-black font-bold relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              View Project
            </a>
          </div>
        </div>
      {/each}
    </div>
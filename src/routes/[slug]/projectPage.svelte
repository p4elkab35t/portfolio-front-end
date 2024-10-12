<script lang="ts">
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import type { Project } from '$lib/pages/projects_fn'; // Adjust the path as necessary
  
    export let project: Project;
  
    onMount(() => {
      // If project is not defined, redirect to the main projects page
      if (!project) {
        goto('/'); // Replace with your projects page route
      }
    });
  </script>

  <a class="absolute bg-zinc-300 p-2 rounded-full top-10 left-10 hover:bg-zinc-200 transition-colors" href="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-arrow-left"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <line x1="5" y1="12" x2="11" y2="18" />
      <line x1="5" y1="12" x2="11" y2="6" />
    </svg>
  </a>
  
  <!-- Left Image Section -->
  <div class="w-full h-[100dvh] flex flex-col md:flex-row">
    <div class="md:h-full h-1/2 flex md:w-1/2 items-center justify-center bg-gray-100">
      <img src={project.imageUrl} alt={project.title} class="object-cover h-[100dvh]" />
    </div>
  
    <!-- Right Text Section -->
    <div class="w-full md:w-1/2 flex flex-1 flex-col justify-between bg-white">
      <!-- Top Section for Name -->
      <div>
        <h1 class="text-5xl font-bold text-black p-8">{project.title}</h1>
        <div class="flex space-x-2 mt-4 w-full p-4 py-7 gap-4 items-center bg-gray-700">
          <h2 class="text-3xl text-zinc-100 font-semibold pl-4">Tech Stack: </h2>
          {#each project.technologies as tech}
            <img src={`/icons/${tech.toLowerCase()}.svg`} alt={tech} class="h-16 w-16 p-3 bg-zinc-300 rounded-full hover:bg-zinc-100 transition-colors" />
            <!-- <span class="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{tech}</span> -->
          {/each}
        </div>
        <div>
          <h2 class="text-3xl font-bold text-black py-8 pb-4 px-8">Description</h2>
          <p class=" text-gray-600 text-xl px-8">{project.description}</p>
        </div>
        
      </div>
    
      <!-- Bottom Section for Links -->
      <div class="p-8 mt-20 w-full bg-gray-700 items-center flex justify-around">
        {#if project.links}
          <a
            href={project.links}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-zinc-300 text-xl text-black font-semibold px-4 py-2 rounded hover:bg-zinc-100 transition duration-300"
          >
            Link to Project
          </a>
        {/if}
      </div>
    </div>
  </div>
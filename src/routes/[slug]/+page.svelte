<script lang="ts">
    import { onMount } from 'svelte';
    import { projects } from '$lib/pages/projects_fn'; // Import your projects array
    import type { Project } from '$lib/pages/projects_fn'; // Adjust the path as necessary
    import ProjectPage from './projectPage.svelte';
  
    let project: Project | undefined;
    export let data;

  
    onMount(() => {
        project = data.props.project;
    });
  </script>
  
  <svelte:head>
      <title>Project not found Pavel Fedorov - p4elkab35t</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
    </svelte:head>

  {#if project}
    <ProjectPage {project} />
  {:else}
    <p>Project not found.</p>
  {/if}
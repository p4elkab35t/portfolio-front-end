<script lang="ts">
    import { onMount } from "svelte";
    
    export let items: string[] = [];
    export let inlineComponents: string[] = [];

    const parseItem = (item:string) => {
        
    }

    onMount(() => {
        
    });
</script>

<style>

</style>

<ul>
    {#each items as item, index}
      <li>
        {@html item}
      </li>
    {/each}
  </ul>
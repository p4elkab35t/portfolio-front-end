<script lang="ts">
    import { onMount } from 'svelte';

    // import { browser } from '$app/env';
    import { theme } from '../stores/ThemeStore'
    // import { get } from 'svelte/store';

    let value: boolean = false;
    
    onMount(() => {
        // value = get(theme) === 'dark';
        theme.subscribe((val) => {
            val==='dark' ? value = true : value = false;
        });
    });

    

</script>

<div class="justify-center flex">
    <label class="inline-flex items-center cursor-pointer border-transparent focus:border-transparent focus:ring-0">
        <input type="checkbox" class="sr-only peer" bind:checked={value} on:click={theme.toggle}/>
        <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 
        peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full 
        peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] 
        after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full 
        after:h-5 after:w-5 transition-all after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
    </label>
</div>

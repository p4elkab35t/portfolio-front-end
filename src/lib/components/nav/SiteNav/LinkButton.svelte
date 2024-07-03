<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    export let currentLink = false;
    export let link="#";

    

    console.log(link, $page.url.pathname, currentLink)

    $: currentLink = link === $page.url.pathname;

    $: colorClasses = currentLink ? "bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent pointer-events-none uppercase" : "text-white";
    
    
    
    </script>

<a href="{link}" class=" relative font-semibold text-3xl w-40 text-center {colorClasses} hover:after:w-3/4 hover:after:left-[12.5%] after:transition-all after:absolute after:left-1/2 after:top-full after:w-0 after:h-[2px] after:bg-white">
    <slot></slot>
</a>
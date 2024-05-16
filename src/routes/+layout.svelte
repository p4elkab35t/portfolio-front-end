<script lang="ts">
    
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";

    const tabs = ["Home", "About", "Contact"];

    import { theme } from "$lib/stores/ThemeStore";
    import { onMount } from "svelte";

    onMount(() => {
        theme.subscribe((state) => {
            state === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        });
    });

    
</script>
  
<Nav {tabs} />

<slot />
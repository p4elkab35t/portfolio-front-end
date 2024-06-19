<script lang="ts">
    
    import "../app.css";
    import Nav from "$lib/components/Nav.svelte";

    const tabs = ["Projects", "About", "Contact"];

    import { theme } from "$lib/stores/ThemeStore";
    import { onMount } from "svelte";

    onMount(() => {
        theme.subscribe((state) => {
            state === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
        });
    });

    
</script>

<div class="head_section">

    <Nav {tabs} />
</div>

<div class="main_section z-0">

    <slot />
</div>

<div class="footer_section">

</div>


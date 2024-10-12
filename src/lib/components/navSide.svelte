<script>
    import NavButton from "$lib/components/navButton.svelte";
    import { pages } from "$lib/stores/pages";
    import { get } from "svelte/store";

    export let navItems = get(pages).pageContent;
</script>

<style>

</style>

<div class="flex flex-col group/nav gap-10 justify-between fixed bottom-7 right-2 md:bottom-7 md:right-24">
    {#each navItems as navItem}
        <NavButton pageData={navItem}></NavButton>
    {/each}
</div>
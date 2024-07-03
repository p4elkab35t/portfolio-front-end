<script lang="ts">
    import PreviewButton from "./PageNav/PreviewButton.svelte";
    import { currentPage } from "$lib/stores/PagesStore";

    export let switchFunction: (index:number)=>void;
    export let pages: any;
    $: currentIndex = $currentPage
</script>

<style>

</style>

<div class="flex flex-row w-screen justify-center bg-transparent absolute bottom-16 group/bar z-50">
    {#each pages as page}
        <PreviewButton title={page.title} current={currentIndex==pages.indexOf(page)} on:click={()=>{switchFunction(pages.indexOf(page))}}/>
    {/each}
</div>
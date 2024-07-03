<script>
    import LinkButton from "./SiteNav/LinkButton.svelte";
    export let linkObj;
</script>

<div class="flex flex-row justify-around w-3/5 fixed left-1/2 -translate-x-2/4 top-10 z-50">
{#each linkObj as link}
    <LinkButton link={link.URL} currentLink={link.currentLink}>
        {link.text}
    </LinkButton>
{/each}
</div>
<script lang="ts">
    import StylePreview from "$lib/components/stylePreview.svelte";
    import { styleStore } from "$lib/stores/styleStore";

    

    const styles = [
        {styleName: "Anime", backgroundString: "url('/style_anime.jpeg')", isInDevelopment: "True"},
        {styleName: "Black&White", backgroundString: "#fff", isInDevelopment: "False"},
        {styleName: "Fantasy", backgroundString: "url('/style_fantasy.jpeg')", isInDevelopment: "True"}
    ];

    styleStore.subscribe((state) => {
    });
</script>

<style>

</style>

<div class="options_list h-full w-full flex flex-col lg:flex-row">
        <!-- <StylePreview styleName="Anime" backgroundString="url('/style_anime.jpeg')" isInDevelopment="True"></StylePreview>
        <StylePreview styleName="Black&White" backgroundString="#fff" isInDevelopment="False"></StylePreview>
        <StylePreview styleName="Fantasy" backgroundString="url('/style_fantasy.jpeg')" isInDevelopment="True"></StylePreview> -->
        {#each styles as style}
            <StylePreview styleName={style.styleName} backgroundString={style.backgroundString} isInDevelopment={style.isInDevelopment}></StylePreview>
        {/each}
</div>
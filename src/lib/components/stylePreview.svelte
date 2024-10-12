<script lang="ts">
    import { styleStore } from "$lib/stores/styleStore";
    import { get } from 'svelte/store'

    export let styleName, backgroundString, isInDevelopment="False";

    let fontClass = "font-roboto";

    switch (styleName) {
        case "Anime":
            fontClass = "text-rubik";
            break;
        case "Black&White":
            fontClass = "font-blackwhite";
            break;
        case "Fantasy":
            fontClass = "text-fantasy";
            break;
    }

    const handleStyleChoice = (styleName:string) => {
        if (styleName == "") return;
        if (styleName == get(styleStore).className) return;
        console.log(styleName);
        console.log(get(styleStore).className);
        styleStore.update((state) => {
            return { ...state, className: styleName };
        });
    }

    const clickHandler = () => {
        if (isInDevelopment == "True") return;
        handleStyleChoice(styleName);
    }

</script>

<style>

</style>

<button id="{styleName} dev_{isInDevelopment}" class="relative style_preview shadow-inner z-0 {isInDevelopment == "True" ? "" : "group/item slidingBackgroundText"}  h-full flex-1 flex flex-col justify-center items-center transition-all cursor-pointer overflow-hidden" on:click={clickHandler}>
    <h1 class="z-20 {fontClass} text-white text-stroke group-active/item:scale-95 transition-transform contrast-text p-8 text-7xl w-full md:w-3/5 lg:w-4/5 text-center">{styleName}</h1>
        
    <div class="{isInDevelopment == "True" ? "" : "group-hover/item:scale-105 group-hover/item:grayscale-0"} lg:grayscale absolute top-0 left-0 h-full w-full flex-1 flex flex-col justify-center items-center transition-all cursor-pointer overflow-hidden"  style="background: {backgroundString} center;">
        
        
    </div>
    
    {#if isInDevelopment == "True"}
        <div class="z-50 absolute w-[150%] rotate-12 top-1/2 h-8 bg-[url('/indev.png')] bg-repeat-x bg bg-center"></div>
        <div class="z-50 absolute w-[150%] -rotate-12 top-1/2 h-10 bg-[url('/indev.png')] bg-repeat-x bg bg-center"></div>
    {/if}
</button>
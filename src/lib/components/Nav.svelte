<script>
    import Switch from "./Switch.svelte";

    let navHidden = true;

    const navToggle = () => {
        navHidden = !navHidden;
    };

    const navReset = () => {
        navHidden = true;
        console.log('visibilitychange');
    };

    export let tabs;
</script>

<div class="flex items-center justify-between p-4 text-white h-16 md:bg-transparent {navHidden?"bg-transparent":"bg-slate-800"}">
    <div class="px-6">
        <a href="/" class="font-bold text-5xl font-sans relative -top-0.5 hover:bg-gradient-to-r from-amber-500 to-pink-500 hover:bg-clip-text hover:text-transparent transition-all"
            >me.</a
        >
    </div>
    <div class="hidden justify-between *:mx-8 md:flex md:flex-row flex-col absolute md:relative top-16 left-0 w-screen py-10 md:py-0 md:w-auto md:top-auto md:bg-transparent md:left-auto {navHidden?"bg-transparent":"bg-slate-800"}" class:hidden={navHidden}>
        <div class="items-center gap-12 flex flex-col md:flex md:flex-row ">
            {#each tabs as tab (tab)}
                <a href="/{tab.toLowerCase()}" class="hover:text-blue-500 transition-colors text-xl">{tab}</a>
            {/each}
        </div>
        <div class="md:flex md:mt-0 mt-12">
            <Switch />
        </div>
    </div>
    <button class="md:hidden px-8 cursor-pointer" on:click={navToggle} on:visibilitychange={navReset}>
        <i class="fa-solid fa-bars fa-2x"></i>
    </button>
    <div class="absolute overflow-x-clip w-[100%] top-0 left-0 after:absolute after:border-2 after:overflow-hidden after:box-border after:border-red-600 after:w-[120%] after:h-12 after:-top-6 after:-left-[10%] after:bg-gradient-to-r from-amber-500 to-pink-500 after:blur-xl after:-z-10">

    </div>
</div>

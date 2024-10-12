<script>
	import { page } from "$app/stores";
    import { currentPage } from "$lib/stores/pages";

    const onClickHandler = () => {
        $currentPage = pageData.id;
    }

    

    export let darkMode = false;
    export let pageData = {id: 1, title: "Skills", content: "/profile"};


</script>

<style>

</style>

<button class="hovered_button relative flex gap-2 group before:content-['...'] {!darkMode?"before:text-black":"before:text-white"} before:pointer-events-none font-bold before:absolute before:rotate-90 before:-left-0.5 before:top-9 before:tracking-[0.5rem] group-last:before:content-[''] before:cursor-none cursor:none" on:click={onClickHandler}>
    <div class="w-6 h-6 flex justify-center items-center gap-4 cursor:none">
        <div class="rounded-full w-6 h-6 border-2 bg-transparent relative {!darkMode?"after:border-neutral-600 group-hover:after:border-black border-black bg-black":"border-white after:border-neutral-400 group-hover:after:border-white bg-white"}  after:absolute after:rounded-full after:w-0 after:h-0 after:border-0 after:transition-all {$currentPage==pageData.id?"after:left-[0.125rem] after:top-[0.125rem] after:border-[0.5rem]":"after:left-[0.650rem] after:top-[0.650rem] group-hover:after:left-[0.125rem] group-hover:after:top-[0.125rem] group-hover:after:border-[0.5rem]"} transition-all">
        </div>
    </div>
    <div class="d hidden md:block before:cursor-none cursor:none {!darkMode?"text-neutral-600 group-hover:text-black transition-all":"text-neutral-400 group-hover:text-white transition-all"}">
        {pageData.title}
    </div>
</button>

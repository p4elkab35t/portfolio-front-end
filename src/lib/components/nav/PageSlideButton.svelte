<script>

    let classStyles=$$props.class;

    let changePageFunc=$$props.changePage;
</script>

<button class="pageSlideButton after:bg-gradient-to-r after:from-amber-500 after:to-rose-500 after:blur-xl after:rounded-full after:absolute after:p-8 after:-z-10 after:-top-2 after:-left-2 {classStyles} on:click={changePageFunc}">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
</button>
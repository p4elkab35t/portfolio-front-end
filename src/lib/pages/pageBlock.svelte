<!-- PageBlock.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { pageScrollPosition } from '$lib/stores/pages';


    export let title: string = '';
    export let id: number;

    let element: HTMLElement;
    let scrollableElement: HTMLElement;

    $: isVisible = false;
    $: slightlyScrolledTop = false;
    $: slightlyScrolledBottom = true;

    const getScrollPosition = () => {

        if (scrollableElement === null) return;
        if (typeof window === 'undefined') return;
        if (typeof id === 'undefined') return;

        let isAtTopOfElement = element.scrollTop <= 10;
        let isAtBottomOfElement = element.scrollTop + element.clientHeight >= element.scrollHeight-10;


        $pageScrollPosition[id] = {
            top: isAtTopOfElement,
            bottom: isAtBottomOfElement
        }

        console.log(`on page ${id} scrolled is ${$pageScrollPosition[id].top} and ${$pageScrollPosition[id].bottom}`);
        console.log(element.scrollTop, element.scrollHeight, element.clientHeight);
        console.log(scrollableElement.getBoundingClientRect().top, scrollableElement.getBoundingClientRect().bottom);
    }

    let startY: number | null = null; // To store the initial touch position

const handleTouchStart = (event: TouchEvent) => {
    startY = event.touches[0].clientY; // Get the starting Y position of the touch
};

const handleTouchMove = (event: TouchEvent) => {
    if (startY === null || !element) return; // If no starting position, exit

    const currentY = event.touches[0].clientY; // Get the current Y position
    const deltaY = startY - currentY; // Calculate how much the finger moved

    // Scroll the element by the calculated amount
    element.scroll({
        top: element.scrollTop + deltaY*10,
        left: 0,
        behavior: 'smooth'
    });

    startY = currentY; // Update the starting position to the current position
};

const handleTouchEnd = () => {
    startY = null; // Reset the starting Y position when the touch ends
};

    const handleScroll = (event: WheelEvent) => {
        if (element) {
            element.scrollTop += event.deltaY;
        }
    }



    const inView = (node: HTMLElement | null)=>{
        const options = {
            root: null,
            threshold: 0.2,
            margin: '0px'
        }
        const optionsForScroll = {
            root: null,
            threshold: 1,
            margin: '0px'
        }
        const scrollObserver = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                getScrollPosition();
                scrollUpate(new Event('scroll'));
            }
            else{
                // console.log('PageBlock is not in view', id);
                slightlyScrolledTop = false;
                slightlyScrolledBottom = false;
            }
        }, optionsForScroll)

        const observer = new IntersectionObserver((entries, observer)=>{
            if(entries[0].isIntersecting){
                isVisible = true;
                observer.disconnect();
                // console.log('PageBlock is in view');
            }
            else{

            }
        }, options)

        if(!node) return;

        scrollObserver.observe(node);

        observer.observe(node)
    }

    const scrollUpate = (event: Event)=>{
        getScrollPosition();
        let top = scrollableElement.getBoundingClientRect().top;
        let bottom = scrollableElement.getBoundingClientRect().bottom;
        if(top < 10){
            slightlyScrolledTop = true;
            // console.log(top, 0);
        }
        else{
            slightlyScrolledTop = false;
        }
        if(bottom < window.innerHeight + 10){
            slightlyScrolledBottom = true;
            // console.log(element.scrollTop, window.innerHeight);
        }
        else{
            slightlyScrolledBottom = false;
        }
    }

    onMount(()=>{
        getScrollPosition();
    })
</script>

<style>
    .fadeInTransition {
        transition: all 0.6s ease;
    }
</style>


<section id="pageblock" class="w-full h-[100svh] mx-auto pl-3 pr-10 py-2 md:px-10 md:py-10 transition-all overflow-hidden relative {slightlyScrolledTop?"innerShadowCover after:fixed after:top-0 after:left-0 after:w-full after:h-[150px] after:z-[1000] block":"after:hidden"}" on:scroll={scrollUpate} on:touchstart={handleTouchStart} on:touchmove={handleTouchMove} on:touchend={handleTouchEnd} on:wheel={handleScroll} bind:this={element} use:inView>
    <div class="w-full h-full flex flex-col fadeInTransition transition-all pt-14 {isVisible?"opacity-100":"opacity-0"}"  on:scroll={scrollUpate} bind:this={scrollableElement}>
        {#if title}
        <h2 class="absolute text-4xl font-bold top-2 md:top-10 after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-15 after:h-[3px] after:bg-black">
            {title}
        </h2>
        {/if}
        <slot />
    </div>
    
</section>
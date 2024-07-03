<script lang="ts">
    import { onMount } from 'svelte';
    import { currentPage } from "$lib/stores/PagesStore";

    const getCurrentPageIndex = (container:HTMLElement):number => {
        return Math.round(container.scrollLeft/container.clientWidth);
    }

    export const updateScrollForDimensions = (container:HTMLElement):void => {
        container.scrollLeft = $currentPage*container.clientWidth;
    }

    export const changePage = (index:number):void => {
        const container:HTMLElement = document.querySelector('#container') as HTMLElement;
        const pagesList:NodeListOf<HTMLElement> | null = document.querySelectorAll('.page') as NodeListOf<HTMLElement> | null;
        if (pagesList === null) return;
        if (container === null) return;
        let tempIndex = index;
        if(index < 0 || index > pagesList.length-1){
            tempIndex = index < 0 ? pagesList.length-1 : 0;
        };
        container.scrollLeft = tempIndex*container.clientWidth;
        $currentPage = tempIndex;
    }
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /// # Needed refactoring:                                                                                      ///
    /// - If page number updated in store, automatically scroll to this page, or even better start with it         ///
    /// - Pages changed and checked not by scrolling but with the store of pages                                   ///
    /// - Pages store should be main source of pages, not the +pages.svelte container                              ///
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    export const iteratePage = (container:HTMLElement, direction:string):void => {
        const currentIndex = getCurrentPageIndex(container);
        if (direction === 'right') {
                changePage( currentIndex+1);
        } else if (direction === 'left') {
                changePage( currentIndex-1);
        }
    }

    onMount(() => {
        const container:HTMLElement = document.querySelector('#container') as HTMLElement;
        const window:HTMLElement = document.querySelector('html') as HTMLElement;

        changePage($currentPage);

        if ( container===null || window===null ) return;

            const handleScroll = (event: WheelEvent): void => {
                event.preventDefault();
                const delta = event.deltaY;
                console.log(event);
                if (delta > 0) {
                    iteratePage(container, 'right');
                } else if (delta < 0) {
                    iteratePage(container, 'left');
                }
            };

            const handleKeydown = (event: KeyboardEvent): void => {
                console.log(event.key);
                if (event.key === 'ArrowRight') {
                    iteratePage(container, 'right');
                } else if (event.key === 'ArrowLeft') {
                    iteratePage(container, 'left');
                }
            };

            window.addEventListener('keydown', handleKeydown as EventListener);
            container.addEventListener('wheel', handleScroll as EventListener);       

            return () => {
                window.removeEventListener('keydown', handleKeydown as EventListener);
                container.removeEventListener('wheel', handleScroll as EventListener);
            };
        });
</script>

<style>
    #container {
      display: flex;
      overflow-x: hidden;
      scroll-snap-type: x mandatory;
      height: 100vh; /* Ensure the container takes the full height */
      scroll-behavior: smooth; /* Smooth scrolling */
    }
    
</style>

<div id="container" class="flex overflow-x-scroll h-screen w-screen snap-x snap-mandatory">
    <slot />
</div>
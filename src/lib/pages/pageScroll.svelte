   
    <!-- PageScroller.svelte -->
    <script lang="ts">
      import { onMount } from 'svelte';
      import { currentPage } from '$lib/stores/pages';
      import { pageScrollPosition } from '$lib/stores/pages';
      
      export let pages: number;
      export let transitionDuration: number = 500; // milliseconds
      
      let scrolling = false;
      let touchStartY = 0;
      let container: HTMLElement;

      // currentPage.subscribe((value) => {
      //   scrollToPage(value);
      // });

      function hasScrollableChild(element: HTMLElement): boolean {
        const childNodes = Array.from(element.querySelectorAll('*')); // Get all descendants of the element
        for (const child of childNodes) {
          const overflowY = window.getComputedStyle(child).overflowY;
          const isScrollable =
            overflowY === 'auto' || overflowY === 'scroll' || overflowY === 'hidden';

          if (isScrollable && child.scrollTop > 0 && child.scrollTop + child.clientHeight < child.scrollHeight && child.getBoundingClientRect().top <= 0 && child.getBoundingClientRect().bottom >= window.innerHeight) {
            // console.log(child.scrollTop + child.clientHeight, child.scrollHeight, child.getBoundingClientRect().top);
            return true; // Found a scrollable child element
          }
        }
        return false; // No scrollable child elements found
      }
      
      function scrollToPage(pageNumber: number) {
        if (scrolling) return;
        
        if (pageNumber >= 0 && pageNumber < pages) {
          scrolling = true;

          if (typeof window === 'undefined') return;
          
          window.scrollTo({
            top: window.innerHeight * pageNumber,
            behavior: 'smooth'
          });
          
          setTimeout(() => {
            scrolling = false;
          }, transitionDuration);
          currentPage.set(pageNumber);
        }
      }
      
      function handleWheel(event: WheelEvent) {
        if (scrolling) return;
        if (!container) return;
        if(hasScrollableChild(container)) return;
        let newPage = Math.min(
          Math.max(0, $currentPage + Math.sign(event.deltaY)),
          pages - 1
        );

        if (newPage - $currentPage > 0) {
          if ($pageScrollPosition[$currentPage].bottom) {
            newPage = $currentPage + 1;
          }
        } else {
          if ($pageScrollPosition[$currentPage].top) {
            newPage = $currentPage - 1;
          }
        }

        scrollToPage(newPage); 

      }
      
      function handleKeydown(event: KeyboardEvent) {
        if (scrolling) return;
        
        if (event.key === 'ArrowDown' || event.key === 'PageDown') {
          event.preventDefault();
          scrollToPage($currentPage + 1);
        } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
          event.preventDefault();
          scrollToPage($currentPage - 1);
        }
      }
      
      function handleTouchStart(event: TouchEvent) {
        if(hasScrollableChild(container)) return;
        touchStartY = event.touches[0].clientY;
      }
      
      function handleTouchEnd(event: TouchEvent) {
        if(!container) return;
        if(hasScrollableChild(container)) return;
        if (scrolling) return;
        
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;
        
        if (Math.abs(deltaY) > 50) { // threshold for swipe
          if (deltaY > 0) {
            if ($pageScrollPosition[$currentPage].top) {
              scrollToPage($currentPage - 1);
            }
          } else {
            if ($pageScrollPosition[$currentPage].bottom) {
              scrollToPage($currentPage + 1);
            }
          }
        }
      }
      
      onMount(() => {
        scrollToPage($currentPage);
        document.addEventListener('keydown', handleKeydown);
        return () => {
          document.removeEventListener('keydown', handleKeydown);
        };
      });
    </script>
    
    <svelte:window 
      on:wheel|preventDefault={handleWheel}
      on:touchstart={handleTouchStart}
      on:touchend={handleTouchEnd}
    />
    
    <div class="relative w-full" bind:this={container}>
      <slot />
      
      <!-- Navigation dots -->
      <!-- <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
        <div class="flex flex-col gap-2">
          {#each Array(pages) as _, i}
            <button
              class="w-3 h-3 rounded-full transition-all duration-300 {i === $currentPage ? 'bg-black scale-125' : 'bg-gray-300 hover:bg-gray-400'}"
              on:click={() => scrollToPage(i)}
              aria-label="Go to page {i + 1}"
            />
          {/each}
        </div>
      </div> -->
    </div>
    
    <style>
      :global(body) {
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
    </style>
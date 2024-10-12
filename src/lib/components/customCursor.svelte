<script lang="ts">
import { onMount } from 'svelte';
import { spring } from "svelte/motion"
const mouseCoords = spring({ x: 0, y: 0 })
const morph = spring({ diameter: 15 })
let color: string | null = null


//TODO: Implement onMouseOverTypes
const onMouseOverTypes = {
  styleChoice: (target: HTMLElement) => {
    
  },
  navButton: (target: HTMLElement) => {
    
  },
  linkElement: (target: HTMLElement) => {
    
  },
  default: (target: HTMLElement) => {
    
  }
}

const onMouseMove = (event: MouseEvent) => {
	$mouseCoords = { x: event.x, y: event.y }
}

//TODO: Implement onMouseOverTypes
const onMouseOver = (event: MouseEvent) => {
	if (event.currentTarget instanceof HTMLElement) {
    const target = event.currentTarget;
		// if (target.classList.contains('hovered_button')) {
		// 	$morph = { diameter: 0 }
		// 	// const attr = event.target.dataset.color
		// 	// if (attr) color =attr
		// }
	}
}

const onMouseOut = (event: MouseEvent) => {
	$morph = { diameter: 15 }
	color = null
}

//TODO: Implement magnetToActiveElements
const magnetToActiveElements = (event: MouseEvent) => {
  
}

onMount(() => {
      document.documentElement.classList.add('custom-cursor');
    });
</script>

<svelte:window 
	on:mousemove={onMouseMove} 
/>

<div class="container">
	<div 
		class="cursor"
    style:--z-index={100}
		style:--x={`${$mouseCoords.x}px`}
		style:--y={`${$mouseCoords.y}px`}
		style:--diameter={`${$morph.diameter}px`}
		style:--color={color}
	/>
</div>

<style>
  :global(*){
    cursor: none;
  }
  .container {
  	position: fixed;
  	top: 0;
  	left: 0;
  	width: 100dvw;
  	height: 100dvh;
  	pointer-events: none;
    z-index: 100;
  }

  .cursor {
  	position: absolute;
  	top: 0;
  	left: 0;
    z-index: var(--z-index, 100);
  	width: var(--diameter, 35px);
  	height: var(--diameter, 35px);
  	border-radius: 50%;
    background-color: var(--color, black);
  	/* border: 2px solid var(--color, red); */
    /* transition: 0.2 ease all; */
  	transform: translate(-50%, -50%) translate(var(--x, 0px), var(--y, 0px)) scale(var(--scale, 1));
  }

  @media screen and (max-width: 1000px) {
    .cursor {
      display: none;
    }
  }
</style>

<!-- <script lang="ts">
    import { onMount } from 'svelte';
    
    let cursor: HTMLElement;
    let cursorOuter: HTMLElement;
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    const easing = 0.2;
    
    function animateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * easing;
      cursorY += dy * easing;
      
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      // cursorOuter.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      
      requestAnimationFrame(animateCursor);
    }
    
    function handleMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }
    
    onMount(() => {
      document.documentElement.classList.add('custom-cursor');
      requestAnimationFrame(animateCursor);
    });
  </script>
  
  <div 
    bind:this={cursorOuter}
    class="fixed pointer-events-none z-50 w-8 h-8 -top-[0.625rem] -left-[0.625rem] border border-black rounded-full transition-transform duration-100 ease-out"
  ></div>
  <div 
    bind:this={cursor}
    class="shadow-2xl shadow-black fixed pointer-events-none z-50 w-3 h-3 bg-black rounded-full transition-transform duration-100 ease-out"
  ></div>
  
  <svelte:window on:mousemove={handleMouseMove} />
  
  <style>
    :global(.custom-cursor) {
      cursor: none;
    }
  </style> -->
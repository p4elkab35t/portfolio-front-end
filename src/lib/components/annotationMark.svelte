<script lang="ts">
    import { onMount } from "svelte";
    import { currentPage } from "$lib/stores/pages";
  
    export let description: string;
    export let font_size: string;
  
    let text: HTMLElement;
    let annotation: HTMLElement;

    let hiddenAnnotation: boolean = true;
  
    function showHideAnnotation(event: MouseEvent) {
      hideOtherAnnotations();
      updateDimensions();
      calculateAnnotationPosition();
      annotation.classList.toggle("hidden");
      moveArrowUnuderCursor(event);
    }
  
    let textX = 0;
    let textY = 0;
    let textWidth = 0;
    let textHeight = 0;
  
    let windowWidth = 0;
    let windowHeight = 0;
  
    let annotationWidth = 0;
    let annotationHeight = 0;
  
    let annotationX = 0;
    let annotationY = 0;

    const moveArrowUnuderCursor = (event: MouseEvent) => {
      const arrow = annotation.querySelector(".arrow");
      if (arrow) {
        arrow.setAttribute('style', `left: ${event.clientX - annotationX}px;`);
      }
    };
  
    const hideOtherAnnotations = () => {
      const annotations = document.querySelectorAll(".annotation_block");
      annotations.forEach((annotationElement) => {
        if (annotationElement !== annotation){
          annotationElement.classList.add("hidden");
        }
      });
    };

    const updateDimensions = () => {
      if (text) {
        const rect = text.getBoundingClientRect();
        textX = rect.x;
        textY = rect.y;
        textWidth = rect.width;
        textHeight = rect.height;
      }
  
      if (annotation) {
        const rect = annotation.getBoundingClientRect();
        annotationWidth = rect.width;
        annotationHeight = rect.height;
      }
      if (hiddenAnnotation) return;
      calculateAnnotationPosition();
    };
  
    const calculateAnnotationPosition = () => {

      annotationX = textX + annotationWidth > windowWidth
        ? windowWidth - annotationWidth - 20
        : textX-40;
  
      annotationY = textY + textHeight + annotationHeight+10 > windowHeight
        ? windowHeight - annotationHeight - 10
        : textY + textHeight + 10 ;
    };
  
    $: updateDimensions();
    $: annotationX, annotationY;

    currentPage.subscribe((value) => {
        if(annotation) annotation.classList.add("hidden");
    });

  
    onMount(() => {
      text?.addEventListener("click", showHideAnnotation);
      window.addEventListener('resize', updateDimensions);
      window.addEventListener('scroll', updateDimensions);
      updateDimensions(); // Initial update
      hideOtherAnnotations();

  
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    });
  </script>

<style>
.annotation_block {
    position: fixed;
    padding: 20px;
    background-color: #2f2f2f;
    /* top: 10px; */
    font-size: 1.5rem;
    z-index: 1000;
    font-weight: 400;
    max-width: 30%;
    color: #cfcfcf;
}
.arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #2f2f2f;
    top: -10px;
    left: 50px;
    transform: translateX(-50%);
}
.annotation_link {
    /* cursor: default; */
    border-bottom: 2px dashed #1f1f1f;
    color: #1f1f1f;
}
.annotation_container {
    position: relative;
    display: inline-block;
}

@media screen and (max-width: 768px) {
    .annotation_block {
        max-width: 90%;
    }
}
</style>

<svelte:window bind:innerWidth={windowWidth} bind:innerHeight={windowHeight} />


<div class="annotation_container">
<button class="annotation_link font-bold text-sm md:text-lg" bind:this={text}>
    <slot />
</button>
</div>
<div bind:this={annotation} style="border-radius: calc({font_size}rem*0.20); font-size: {font_size}rem; left: {annotationX}px; top: {annotationY}px;" class="transition-all annotation_block">
    {description}
    <div class="arrow">

    </div>
</div>
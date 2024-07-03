<script lang="ts">
  import { onMount } from 'svelte';
  import { tick } from 'svelte';

  export let threshold = 0.4;

  let block: HTMLElement;
  let visible = false;

  $: visible_class = visible ? 'isVisible' : 'isInvisible';


  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const windowWidth = window.innerWidth;
      const rect = entry.target.getBoundingClientRect();
      console.log("triggered")
      if (rect.left < windowWidth * (1 - threshold) && rect.right > 0) {
        visible = true;
        // observer.disconnect();
      }

    });
  }, {
    threshold: threshold
  });

  observer.observe(block);
  });


</script>

<style>
    .page {
      min-width: 100vw;
      /* height: 100vh; */
    }
    @keyframes slidDownIn {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }

    .isInvisible {
      animation: none;
      opacity: 0;
    }

    .isVisible {
      animation: slidDownIn 0.5s ease-out forwards;
      transform: translateY(0);
    }
</style>

<div bind:this={block} class="page flex justify-center items-center transition-all {visible_class}">
    <slot />
</div>
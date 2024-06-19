<script>
    import { onMount } from 'svelte';
    import { tick } from 'svelte';
  
    export let threshold = 0.4; // How much of the block should be visible to trigger the animation
  
    /**
     * @type {HTMLDivElement}
     */
    let block;
    let visible = false;

    $: visible_class = visible ? 'visible' : '';
  
    const handleScroll = () => {
      const rect = block.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * (1 - threshold) && rect.bottom > 0) {
        visible = true;
        window.removeEventListener('scroll', handleScroll);
      }
    };
  
    onMount(() => {
      handleScroll(); // Check visibility on mount
      window.addEventListener('scroll', handleScroll);
    });
  </script>

<style>
    .blockEl {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .blockEl.visible {
      opacity: 1;
      transform: translateY(0);
    }
  </style>

<div bind:this={block} class="blockEl flex p-10 gap-40 flex-col xl:flex-row justify-center items-center {visible_class}">
    <div class="info_column flex-7">
        <slot name="info"></slot>
    </div>
    <div class="active_column flex-3">
        <slot name="active"></slot>
    </div>
</div>
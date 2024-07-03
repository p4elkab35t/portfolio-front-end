<script>

</script>

<style>
    .gradient-border {
      border-width: 2px;
      border-image: linear-gradient(to right, #f59e0b, #f43f5e) 1;
    }
  </style>

<button class="relative text-white gradient-border bg-transparent py-6 w-full font-semibold text-5xl m-auto mt-6 after:bg-gradient-to-r after:from-amber-500 after:to-rose-500 after:h-full after:w-full after:absolute after:-top-0 after:-left-full hover:after:translate-x-full after:-z-10 after:transition-all overflow-clip">
    <slot />
</button>
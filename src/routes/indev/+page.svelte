<script>
    import GradientText from "$lib/components/general/GradientText.svelte";
    let rows = 10;
    let cols = 10;
    let gridItems = Array(rows * cols).fill(true);

// Define border colors
    let borderColors = [
        'border-red-500',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-red-800',
        'border-red-700',
        'border-transparent',
        'border-red-600',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-red-500',
        'border-red-400',
        'border-red-300',
        'border-transparent',
        'border-blue-500',
        'border-blue-800',
        'border-blue-700',
        'border-blue-600',
        'border-transparent',
        'border-blue-500',
        'border-transparent',
        'border-blue-400',
        'border-blue-300',
        'border-transparent',
        'border-green-800',
        'border-green-700',
        'border-green-600',
        'border-transparent',
        'border-green-500',
        'border-green-400',
        'border-green-300',
        'border-transparent',
        'border-green-500',
        'border-yellow-500',
        'border-transparent',
        'border-yellow-800',
        'border-yellow-700',
        'border-yellow-600',
        'border-transparent',
        'border-transparent',
        'border-yellow-500',
        'border-yellow-400',
        'border-transparent',
        'border-yellow-300',
        'border-purple-500',
        'border-transparent',
        'border-transparent',
        'border-purple-800',
        'border-purple-700',
        'border-purple-600',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-purple-400',
        'border-purple-300',
        'border-pink-500',
        'border-pink-800',
        'border-pink-700',
        'border-transparent',
        'border-pink-600',
        'border-pink-500',
        'border-transparent',
        'border-pink-400',
        'border-pink-300',
        'border-indigo-800',
        'border-indigo-700',
        'border-indigo-600',
        'border-indigo-500',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-indigo-400',
        'border-indigo-300',
        'border-transparent',
        'border-gray-800',
        'border-gray-700',
        'border-gray-600',
        'border-transparent',
        'border-gray-500',
        'border-transparent',
        'border-gray-400',
        'border-gray-300',
        'border-transparent',
        'border-teal-800',
        'border-transparent',
        'border-teal-700',
        'border-teal-600',
        'border-teal-500',
        'border-teal-400',
        'border-teal-300',
        'border-orange-800',
        'border-orange-700',
        'border-orange-600',
        'border-transparent',
        'border-transparent',
        'border-transparent',
        'border-orange-500',
        'border-orange-400',
        'border-transparent',
        'border-orange-300',
        'border-transparent',
        'border-rose-800',
        'border-transparent',
        'border-transparent',
        'border-rose-700',
        'border-rose-600',
        'border-rose-500',
        'border-transparent',
        'border-rose-300',
        'border-amber-800',
        'border-transparent',
        'border-amber-700',
        'border-amber-600',
        'border-transparent',
        'border-amber-500',
        'border-amber-400',
        'border-amber-300'
    ];
</script>

<style>
    .gradient-border {
      border-width: 2px;
      border-image: linear-gradient(to right, #f59e0b, #f43f5e) 1;
    }
    .grid-container {
    display: grid;
    align-content: end;
    grid-template-columns: repeat(auto-fill, minmax(8rem, 8rem)); /* auto-fill and minmax for responsive design */
    grid-auto-rows: minmax(8rem, 8rem); /* Maintain height for each item */
    gap: 0; /* No gap between items */
    width: 100vw;
    height: 100vh;
  }
</style>

<div class="container mx-auto w-2/3 p-10 bg-black gradient-border relative overflow-clip">
    <h1 class="text-6xl text-zinc-300 text-center"><GradientText>This content is under development! <br /> Come back later!</GradientText></h1>
    <div class="absolute p-24 border-2 border-red-600 -top-16 -left-24 bg-gradient-to-tr from-amber-500 to-red-600 rounded-full blur-2xl"></div>
    <div class="absolute p-24 border-2 border-red-600 -right-16 -bottom-6 bg-gradient-to-bl from-rose-400 to-purple-500 rounded-full blur-2xl"></div>
</div>
<div class="absolute grid-container">
    {#each gridItems as item, index}
        {#if item}
        <div class="grid-item border-2 w-32 h-32 -z-30 {borderColors[index % borderColors.length]}"></div>
        {/if}
    {/each}
</div>
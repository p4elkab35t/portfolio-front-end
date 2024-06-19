<script>
    import Block from "$lib/components/Block.svelte";
    import Button from "$lib/components/Button.svelte";
    
    const alt = () => {
        alert("Clicked");
    }
</script>

<Block threshold={0.15}>
    <span slot="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia provident dolorem vero quibusdam iste magnam! Unde facilis consequatur fuga blanditiis natus ipsam quibusdam illum quae ex sit? Ullam, quisquam?
    </span>
    <Button slot="active" on:click={alt}>
        Click me
    </Button>
</Block>
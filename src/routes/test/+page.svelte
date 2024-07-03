<script>
    import AnnotationMark from "$lib/components/layout/AnnotationMark.svelte";
    import BlocksList from "$lib/components/layout/ME_page/BlocksList.svelte";

    const items = [
        "item 1 <AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark>",
        "item 2 <AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark>",
        "item 3",
        "item 4",
        "item 5",
        "<AnnotationMark description='thank you' font_size='1'>amet</AnnotationMark> item 6",
        "item 7",
        "item 8",
        "item 9",
        "item 10"
    ]

</script>
<div>
<h1 class="text-6xl font-bold text-white relative">
    azazaza
<AnnotationMark description="new block list item" font_size="2">
    List Item
</AnnotationMark>
 brbrbr
</h1>

<p class="text-white p-10">
    Lorem ipsum dolor sit, <AnnotationMark description="thank you" font_size="1">amet</AnnotationMark> consectetur adipisicing elit. Aliquid, debitis in doloremque est, fuga assumenda perferendis animi repellendus fugit error iure quidem illum voluptatibus quia maxime cupiditate, sint voluptas necessitatibus.
    Lorem ipsum dolor sit amet consectetur <AnnotationMark description="thank you" font_size="1">adipisicing </AnnotationMark>elit. Suscipit ducimus voluptas perspiciatis vero rerum eum, exercitationem, praesentium provident rem nulla totam. Similique consequatur illum obcaecati repellendus, ut minus dolores hic?
</p>
</div>

<div>
    <BlocksList {items}/>
</div>
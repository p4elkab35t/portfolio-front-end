 <script lang="ts">
    export let title: string;
    export let current: boolean = false;
 </script>

 <style>
    .textInvisible {
        opacity: 0;
        display: none;
    }

    .textVisible {
        opacity: 1;
        display: block;
    }
 </style>

 <button class="flex flex-col mx-4 relative place-items-center group/item" on:click>
    <h2 class="text-center {current===true?"text-zinc-100":"text-zinc-600"}  -bottom-10 text-4xl opacity-0 absolute group-hover/bar:relative group-hover/bar:bottom-1 group-hover/bar:opacity-100 group-hover/item:text-zinc-300 ">
        {title}
    </h2>
    <div class="w-10 h-[2px] {current===true?"current-page bg-zinc-300":"bg-zinc-600"} relative transition-transform group-hover/item:bg-zinc-300 group-hover/bar:w-full {current==true?"":"group-hover/item:w-[130%]"}">
        <div class="absolute w-10 h-4 -bottom-10 py-10 left-0 border-transparent border-2 group-hover/bar:w-20 group-hover/bar:-left-5">

        </div>
    </div>
</button>
<script>
    import "../app.css";
    import { page } from '$app/stores';
    import { afterUpdate } from "svelte";
    import SiteNav from "../lib/components/nav/SiteNav.svelte";

    let currentPath = $page.url.pathname;
    let linkObj = [
        {text: "ME", URL: "/", currentLink: false},
        {text: "Projects", URL: "/projects", currentLink: false},
        {text: "Contact", URL: "/contact", currentLink: false},
        {text: "Train", URL: "/train", currentLink: false}
    ];
</script>

<svelte:head>
  <link rel="icon" href="/icon/favicon.ico" />
</svelte:head>

<SiteNav {linkObj}/>

<div class="w-screen h-screen flex flex-col items-center justify-center">
  <slot />
</div> 
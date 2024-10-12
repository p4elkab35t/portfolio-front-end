<script>
    // import StyleChoice from "$lib/pages/styleChoice.svelte";
    import NavSide from "$lib/components/navSide.svelte";
    import About from "$lib/pages/about.svelte";
    import Skills from "$lib/pages/skills.svelte";
    import Resume from "$lib/pages/resume.svelte";
    import Projects from "$lib/pages/projects.svelte";
    import Contact from "$lib/pages/contact.svelte";
    import PageBlock from "$lib/pages/pageBlock.svelte";
    import PageScroll from "$lib/pages/pageScroll.svelte";

    const pages = [
        { component: About, bg: 'bg-white', title: '' },
        { component: Skills, bg: 'bg-gray-50', title: 'Skills' },
        { component: Resume, bg: 'bg-gray-50', title: 'CV' },
        { component: Projects, bg: 'bg-white', title: 'Projects' },
        { component: Contact, bg: 'bg-white', title: '' },
    ]
</script>

<style>
</style>

<div class="w-full bg-white">
    <PageScroll pages={pages.length}>
        {#each pages as { component: Component, bg, title }, i}
            <PageBlock title={title} id={i}>
                <svelte:component this={Component} />
            </PageBlock>
        {/each}
    </PageScroll>
    <!-- <PageBlock title="About">
        <About />
    </PageBlock>
    <PageBlock title="Skills">
        <Skills />
    </PageBlock>
    <PageBlock title="Resume">
        <Resume />
    </PageBlock>
    <PageBlock title="Projects">
        <Projects />
    </PageBlock>
    <PageBlock title="Contact">
        <Contact />
    </PageBlock> -->
    <NavSide />
</div>

<script lang="ts">
	import InfoArticle from '$lib/components/layout/ME_page/BlocksGrid.svelte';
	import GradientText from '$lib/components/general/GradientText.svelte';
	import GradientButton from '$lib/components/general/GradientButton.svelte';
	import SlidingPage from '$lib/components/layout/SlidingPage.svelte';
	import PageSlideButton from '$lib/components/nav/PageSlideButton.svelte';
	import SlidingContainer from '$lib/components/layout/slidingContainer.svelte';
	import PageNav from '$lib/components/nav/PageNav.svelte';
	import AnnotationMark from '$lib/components/layout/AnnotationMark.svelte';

	import { pages, currentPage } from '$lib/stores/PagesStore';

	import { onMount } from 'svelte';

	const pagesList = $pages;
	let iteratePage: any;
    let updateScrollForDimensions: any;
	let changePage: any;
	let title: string = pagesList[0].title;
	let currentPageIndex: number = 0;
	currentPage.subscribe((value) => {
		currentPageIndex = value;
		title = pagesList[value].title;
	});

    const dispatchResize = () => {
        const container: HTMLElement = document.querySelector('#container') as HTMLElement;
        if (container !== null) {
            updateScrollForDimensions(container);
        }
    };
	onMount(() => {
        const buttons: NodeListOf<HTMLElement> | null = document.querySelectorAll(
			'.pageSlideButton'
		) as NodeListOf<HTMLElement>;
		const container: HTMLElement = document.querySelector('#container') as HTMLElement;
		if (buttons !== null || container !== null) {
			buttons.forEach((button) => {
				button.addEventListener('click', (event) => {
					event.preventDefault();
					const direction = button.classList.contains('slideLeft') ? 'left' : 'right';
					iteratePage(container, direction);
				});
			});
		}
        
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<svelte:window on:resize={dispatchResize} />

<SlidingContainer bind:iteratePage bind:changePage bind:updateScrollForDimensions>
	<SlidingPage>
		<div class="max-w-screen-md w-4/5">
            <h1 class="text-[10rem] leading-none relative">
                <GradientText 
                >Pavel Fedorov</GradientText>
                <h2 class="absolute -top-32 right-5 border-2 border-r-0 border-b-0 border-amber-500 rounded-full w-0 h-0 p-32">
                    <GradientText>23</GradientText>
                </h2>
            </h1>
            <div class="flex flex-row text-white gap-10">
                <div>
                    <p class="text-xl">
                    Hello! I'm Pavel, a 23-year-old tech enthusiast with a master's degree in Cybersecurity. Currently, I'm honing my skills in full-stack development in Vancouver, BC, Canada. 
                </p>
                </div>
                <div>
                    <p class="text-xl">
                        My journey into IT and web development started with a passion for solving complex problems and a desire to create impactful digital solutions. Over the years, I've immersed myself in various technologies and gained hands-on experience through both my academic pursuits and practical projects.
                    </p>
                </div>
            </div>
        </div>
	</SlidingPage>
	<SlidingPage>
		<div class="flex flex-row gap-16">
			<div>
                <h4 class="text-6xl -ml-10 mt-8">
                    <GradientText>Main Tech:</GradientText>
                </h4>
                <!-------------------------------------------------------------------------------------
                |   Refactor:
                |   - Use a list of objects to render the list of skills
                |   - Add a description to each skill
                |   - Add work expoerience with skills
                |   - Add a list of projects with skills
                |   - Add Icons to each skill
                -------------------------------------------------------------------------------------->
				<ul class="list-disc text-white text-4xl ">
					<li class="p-4">
						<AnnotationMark
							description="I've extensively used JavaScript in my projects, both academic and personal. It has been the backbone of many of my web applications, providing dynamic and interactive elements to enhance user experience."
							font_size="1">JavaScript</AnnotationMark
						>
					</li>
					<li class="p-4">
						<AnnotationMark
							description="TypeScript has been a crucial part of my toolkit, offering me the ability to write scalable and maintainable code. I've utilized TypeScript primarily in my recent projects to ensure type safety and reduce bugs."
							font_size="1">TypeScript</AnnotationMark
						>
					</li>
					<li class="p-4">
						<AnnotationMark
							description="Svelte has revolutionized my approach to building web applications. I used Svelte for my recent projects, appreciating its simplicity and performance benefits, which have allowed me to create fast and responsive user interfaces."
							font_size="1">Svelte</AnnotationMark
						>
					</li>
					<li class="p-4">
						<AnnotationMark
							description="Tailwind CSS has been a game-changer for styling my applications. I love its utility-first approach, which has significantly sped up my development process and allowed for easy customization of my projects."
							font_size="1">Tailwind CSS</AnnotationMark
						>
					</li>
					<li class="p-4">
						<AnnotationMark
							description="CSS has been a fundamental part of my skill set, enabling me to create visually appealing and user-friendly designs. I have used CSS extensively to bring my web pages to life with layouts and animations."
							font_size="1">CSS</AnnotationMark
						>
					</li>
					<li class="p-4">
						<AnnotationMark
							description="HTML is the cornerstone of my web development skills. My proficiency in HTML ensures that I can structure web content effectively, laying a strong foundation for any web project."
							font_size="1">HTML</AnnotationMark
						>
					</li>
				</ul>
			</div>
			<div class="ml-20 text-right">
                <h1 class="text-[12rem] leading-none">
				    <GradientText>Skills</GradientText>
                </h1>
                <div class="mt-10">
                    <h4 class="text-4xl">
                        <GradientText>Additional:</GradientText>
                    </h4>
                    <ul class="flex flex-col text-2xl -mr-3">
                        <li class="p-4">
                            <AnnotationMark
							description="Ensuring applications work seamlessly across devices."
							font_size="1">Responsive Design</AnnotationMark
						></li>
                        <li class="p-4">
                            <AnnotationMark
                            description="Tackling challenges with innovative  solutions."
                            font_size="1">Problem-Solving</AnnotationMark
                        ></li>
                        <li class="p-4">
                            <AnnotationMark
                            description="Experience working in teams during my education and startup projects."
                            font_size="1">Team Collaboration</AnnotationMark
                        ></li>
                        <li class="p-4">
                            <AnnotationMark
                            description="Managing timelines and deliverables effectively."
                            font_size="1">Project Management</AnnotationMark
                        >
                        </li>
                    </ul>
                </div>
            </div>
		</div>
	</SlidingPage>
	<SlidingPage>
		<InfoArticle>
			<div slot="first">
				<h1 class="text-[280px] text-center leading-[216px] p-0">
					<GradientText>CV</GradientText>
				</h1>
			</div>
			<div slot="second" class="text-justify">
				<p class="text-[40px]">
					Here are brief information about my study projects, achievements and work experience
				</p>
			</div>
			<div slot="third" class="text-justify">
				<p class="text-[40px]">
					You can be interested in hiring me as your
					<br />
					front-end or full-stack developer
				</p>
			</div>
			<div slot="fourth" class="text-justify">
				<p class="text-[40px]">If so, mind spending couple minutes to</p>
				<GradientButton>Check my CV</GradientButton>
			</div>
		</InfoArticle>
	</SlidingPage>
</SlidingContainer>

<PageSlideButton class="fixed top-1/2 left-6 slideLeft" />
<PageSlideButton class="fixed top-1/2 right-6 rotate-180 slideRight" />
<PageNav pages={pagesList} switchFunction={changePage} />

<style>
</style>

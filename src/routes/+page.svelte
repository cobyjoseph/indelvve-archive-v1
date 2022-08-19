<script>
	import Navbar from '../Components/Navbar.svelte';
	import SearchBar from '../Components/SearchBar.svelte';
	import TopicHeader from '../Components/TopicHeader.svelte';
	import Carousel from '../UI/Carousel.svelte';
	import postsStore from '../postsStore.js';
	import { each } from 'svelte/internal';
	import Topic from '../Components/Topic.svelte';

	export let apidata = [
		{
			id: 1,
			text: ''
		}
	];
	let text;

	function addData() {
		apidata = [
			...apidata,
			{
				id: Math.random(),
				text: text
			}
		];
	}
</script>

<div class="flex flex-grow justify-center">
	<Navbar />

	<main class="relative mb-6 mr-2 grid h-full w-3/4 max-w-[620px] grid-cols-1">
		<SearchBar />

        <Topic />
        <TopicHeader />
        

		<Carousel postsArr={$postsStore} />
		<Carousel postsArr={$postsStore} />
	</main>
</div>

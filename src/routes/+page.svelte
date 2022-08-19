<script>
	import Navbar from '../Components/Navbar.svelte';
	import SearchBar from '../Components/SearchBar.svelte';
	import TopicHeader from '../Components/TopicHeader.svelte';
	import Carousel from '../UI/Carousel.svelte';
	import postsStore from '../postsStore.js';
	import { each } from 'svelte/internal';

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

	<main class="relative mb-8 mr-2 grid h-full w-3/4 max-w-[620px] grid-cols-1">
		<SearchBar />

		<div
			class="max-w-6 mt-3 mr-auto inline w-auto rounded-full bg-secondary px-3 text-xl font-semibold text-body"
		>
			#Remote work
		</div>

		<!-- <form on:submit|preventDefault={addData} action="" method="">
			<input type="text" name="inputText" placeholder="type here" bind:value={text} />
			<button type="submit">click</button>
		</form> -->

		<ul>
			{#each apidata as data (data.id)}
				<li>
					<div class="text-2xl font-medium">
						{data.text}
					</div>
				</li>
			{/each}
		</ul>

		<TopicHeader />

		<Carousel postsArr={$postsStore} />
		<Carousel postsArr={$postsStore} />
	</main>
</div>

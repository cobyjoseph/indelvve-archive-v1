<script>
	import Card from './Card.svelte';
	import PostHeader from '../Components/PostHeaderDark.svelte';
	import SortButton from './SortButtonLight.svelte';
	import ChapTopicSentence from '../Components/ChapTopicSentence.svelte';
	import { fade, fly, scale, slide } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import {
		circIn,
		expoIn,
		expoOut,
		quartIn,
		quintIn,
		quintInOut,
		quintOut,
		sineInOut
	} from 'svelte/easing';
	import { sineIn, sineOut } from 'svelte/easing';

	import { subscribe } from 'svelte/internal';
	import AddChapBtn from './AddChapBtn.svelte';
	import PostHeaderDark from '../Components/PostHeaderDark.svelte';
	import SortButtonDark from './SortButtonDark.svelte';
	import SortButtonLight from './SortButtonLight.svelte';
	import PostInputField from '../Components/postInputField.svelte';
	import postsStore from '../postsStore';
import AddChapBtnLight from './AddChapBtnLight.svelte';

	let postHeight;

	$: direction = 'right';
	$: currentCard = 0;
	$: lastCard = 0;

	let showInputContent = false;

	// Getting the data from the postsStore the long way so that I can access it's array lnngth
	let posts;
	postsStore.subscribe((i) => {
		posts = i;
	});

	function nextCard() {
		direction = 'right';
		currentCard = (currentCard + 1) % posts.length;
	}

	function prevCard() {
		direction = 'left';
		if (currentCard != 0) {
			currentCard = (currentCard - 1) % posts.length;
		} else {
			currentCard = posts.length - 1;
		}
	}

	function togglePostInput() {
		showInputContent = !showInputContent;
	}
</script>

<!-- ____________________________________________________________________________________________________ -->

<!-- current count: {currentCard}
prev count: {lastCard}
{direction} -->

<div class=" mt-2 mb-2 rounded-lg bg-mainDark shadow-lg">
	<div class="px-5 pt-3">
		<ChapTopicSentence />
	</div>

	<div class="m-3 overflow-hidden rounded-sm bg-mainLessDark px-3 pt-2 pb-[0.5px]">
		<!-- Sort and add content group -->
		<div class="flex gap-3">
			<SortButtonLight />
			<button on:click={togglePostInput}>
				<AddChapBtnLight addText="content" />
			</button>
		</div>

		{#if showInputContent}
			<div transition:slide={{ duration: 300, easing: quintInOut }}>
				<PostInputField />
			</div>
		{/if}

		<!-- Button group and nav dots group-->
		<div class="mt-2 flex transform justify-between ">
			<!-- Button left  -->
			<button on:click={prevCard}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-[26px] w-[26px] justify-center stroke-white stroke-[3px]"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
				</svg>
			</button>

			<!-- Nav dots group -->
			<div class="mx-12 flex h-[26px] items-center justify-center gap-1.5 ">
				{#each posts as post (post.id)}
					{#if currentCard + 1 === post.id}
						<div class="h-[15px] w-[15px]  bg-secondary rounded-sm" />
					{:else}
						<div class="h-[15px] w-[15px] bg-accent rounded-sm" />
					{/if}
				{/each}
			</div>

			<!-- Button right -->
			<button on:click={nextCard}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-[26px] w-[26px] justify-center stroke-white stroke-[3px]"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>

		{#each [posts[currentCard]] as post (post.id)}
			<div
				in:fly={{
					delay: 0,
					duration: direction === 'right' ? 300 : 300,
					x: direction === 'right' ? 100 : -100,
					easing: sineIn
				}}
				out:fly={{
					duration: 400,
					x: direction === 'right' ? -100 : 100,
					easing: sineOut
				}}
				animate:flip={{
					delay: 200,
					easing: quintOut
				}}
				class="mt-2 mb-4 "
			>
				<Card>
					<span slot="topPost">
						<div bind:clientHeight={postHeight} class="py-2">
							<PostHeaderDark
								upvotes="130"
								authorName="Nicolas Bloom"
								timeSince="34"
								dOrMin="d"
								commentNumber="12"
							/>

							<div class="px-6 text-mainText ">
								{post.text}
							</div>
							<div class="mt-2">
								<img src={post.src} alt="" />
							</div>
						</div>
					</span>

					<span slot="bottomPost">
						<div class="py-2">
							<PostHeaderDark
								upvotes="130"
								authorName="Nicolas Bloom"
								timeSince="34"
								dOrMin="d"
								commentNumber="12"
							/>
							<div class="px-6">
								{post.text}
							</div>
							<div class="mt-2 opacity-0">
								<img src={post.src} alt="" />
							</div>
						</div>
					</span>
				</Card>
			</div>
		{/each}
	</div>
</div>

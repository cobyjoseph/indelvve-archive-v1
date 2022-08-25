<script>
	import Navbar from '$lib/Navbar.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import TopicHeader from '$lib/TopicHeader.svelte';
	import Collection from '$lib/Collection.svelte';
	import { postsStore } from '../lib/stores/postsStore.js';
	import { each } from 'svelte/internal';
	import Topic from '$lib/Topic.svelte';
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabase.js';

	import Profile from '$lib/Profile.svelte';
	import { isOverlayOpen } from '../lib/stores/LoginStore.js';
	import LoginOverlay from '$lib/LoginOverlay.svelte';
	import CreatePost from '$lib/CreatePost.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});

	let testPost;
	let showSignup = false;
</script>


<!-- <div class="container" style="padding: 50px 0 100px 0;">
	{#if $user}
		<Profile />
	{:else}
		<Auth />
	{/if}
</div> -->

<div class="flex flex-grow justify-center ">
	<Navbar />

	<main class=" relative mx-4 mb-6 grid h-full grid-cols-1 md:w-3/4 md:max-w-[620px] ">
		<SearchBar />

		<!-- <CreatePost /> -->
		{#if $isOverlayOpen}
			<LoginOverlay />
		{/if}

		<!-- <div class="container" style="padding: 50px 0 100px 0;">
			{#if $user}
				<Profile />
			{:else}
				<Auth />
			{/if}
		</div> -->

		<Topic />
		<TopicHeader />

		<Collection {$postsStore} />
		<Collection {$postsStore} />
	</main>
</div>

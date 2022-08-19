<script>
	import Navbar from '../Components/Navbar.svelte';
	import SearchBar from '../Components/SearchBar.svelte';
	import TopicHeader from '../Components/TopicHeader.svelte';
	import Carousel from '../UI/Carousel.svelte';
	import postsStore from '../postsStore.js';
	import { each } from 'svelte/internal';
	import Topic from '../Components/Topic.svelte';
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import Auth from '$lib/Auth.svelte';
	import Profile from '$lib/Profile.svelte';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
	});
</script>

<div class="flex flex-grow justify-center">
	<Navbar />

	<main class="relative mb-6 mr-2 grid h-full w-3/4 max-w-[620px] grid-cols-1">
		<SearchBar />

		<!-- <div class="container" style="padding: 50px 0 100px 0;">
			{#if $user}
				<Profile />
			{:else}
				<Auth />
			{/if}
		</div> -->

		<Topic />
		<TopicHeader />

		<Carousel postsArr={$postsStore} />
		<Carousel postsArr={$postsStore} />
	</main>
</div>

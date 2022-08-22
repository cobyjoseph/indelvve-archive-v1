<script>
	import Navbar from '$lib/Navbar.svelte';
	import SearchBar from '$lib/SearchBar.svelte';
	import TopicHeader from '$lib/TopicHeader.svelte';
	import Collection from '$lib/Collection.svelte';
	import postsStore from '../postsStore.js';
	import { each } from 'svelte/internal';
	import Topic from '$lib/Topic.svelte';
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

	<main class=" relative mb-6 mr-2 grid h-full w-3/4 max-w-[620px] grid-cols-1">
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

		<Collection postsArr={$postsStore} />
		<Collection postsArr={$postsStore} />
	</main>
</div>

<script>
	import { supabase } from '$lib/supabase.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<div class="outline outline-2 outline-black mt-4 ">
	<form
		class="flex  bg-boxBackground gap-8"
		on:submit|preventDefault={handleLogin}
	>
		<h1 class="text-black font-semibold text-lg">Sign up</h1>
		<div>
			<input
				class="max-w-8  outline outline-1 outline-black"
				type="email"
				placeholder="Enter email"
				bind:value={email}
			/>
		</div>
		<div class=" max-w-[10px] text-sm font-medium">
			<input
				type="submit"
				class="button block px-2 outline outline-1 outline-black"
				value={loading ? 'Loading' : 'Submit'}
				disabled={loading}
			/>
		</div>
	</form>
</div>

<script>
	import '../app.css';
	import { supabase } from '$lib/supabase.js';
	console.log(supabase);
	import { isOverlayOpen } from '../lib/stores/LoginStore.js';
	import LoginOverlay from '../lib/LoginOverlay.svelte';
</script>

{#if isOverlayOpen}
	<div class="bg-slate-400" />
{/if}
<div class="bg-green-3309 container mx-auto my-1">
	<slot />
</div>

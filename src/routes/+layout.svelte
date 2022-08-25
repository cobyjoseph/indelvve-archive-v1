<script>
	import '../app.css';

	import { isOverlayOpen } from '../lib/stores/LoginStore.js';
</script>

{#if isOverlayOpen}
	<div class="bg-slate-400" />
{/if}
<div class="bg-green-3309 container mx-auto my-1">
	<slot />
</div>

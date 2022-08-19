<script>
	export let error;
</script>

{#if error}
	<p class="text-mainText font-medium">{error.message}</p>
{/if}

<script>
	import postsStore from '../postsStore';

	let posts;
	let text;
	let id;
	let src;

	postsStore.subscribe((value) => {
		posts = value;
	});

	function addContent() {
		postsStore.update((posts) => {
			return [
				...posts,
				{
					id: id,
					text: text,
					src: src
				}
			];
		});
	}
</script>

<form action="/api.json" method="post" on:submit|preventDefault={addContent}>
	<div class="grid grid-cols-1 rounded-sm">
		<textarea
			rows="5"
			name="postInputText"
			aria-label="Add content"
			bind:value={text}
			on:input
			placeholder="Add post"
			class="mt-2 rounded-sm px-2 py-1 text-mainText  "
		/>
		<input type="text" name="idInput" bind:value={id} class="mt-1" />
		<input type="text" name="srcInput" bind:value={src} class="mt-1" />
		<div class="mt-2">
			<button type="submit" class="-mb-2 flex rounded-sm bg-accent px-3 font-medium text-mainDark ">
				Submit
			</button>
		</div>
	</div>
</form>

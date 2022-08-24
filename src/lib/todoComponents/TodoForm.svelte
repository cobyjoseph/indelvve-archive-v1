<script>
	import { addTodo } from '../todosStores/todoStore.js';
	import { user } from '../todosStores/authStore.js';
	let todo = '';

	const handleSubmit = () => {
		console.log($user);
		addTodo(todo, $user.id);
		todo = '';
	};
</script>

<form class="form my-6" on:submit|preventDefault={handleSubmit}>
	<div class="mb-2 flex flex-col text-sm">
		<label for="todo" class="mb-2 font-bold text-gray-800 "> Todo </label>
		<input
			type="text"
			name="todo"
			bind:value={todo}
			placeholder="ex. Learn about authentication in Next.js"
			class="appearance-none rounded-lg border border-gray-200 p-2 shadow-sm focus:border-gray-500 focus:outline-none "
		/>
	</div>
	<button
		type="submit"
		class=" w-full rounded bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-600"
	>
		Submit
	</button>
</form>

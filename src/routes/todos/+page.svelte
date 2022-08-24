<script>
	import Todo from '../../lib/todoComponents/Todo.svelte';
	import TodoForm from '../../lib/todoComponents/TodoForm.svelte';
	import { todos } from '../../lib/todosStores/todoStore.js';
</script>

<main>
	<h1 class="text-center text-2xl font-bold text-gray-800 md:text-3xl">My Todos</h1>
	<TodoForm />
	{#each $todos as todo (todo.id)}
		<Todo {todo} />
	{/each}
</main>

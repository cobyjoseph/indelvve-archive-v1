<script>
	import '../app.css';
	import { supabase } from '$lib/supabase.js';
	console.log(supabase);
</script>

<div class="container mx-auto my-1 ">
	<slot />
</div>

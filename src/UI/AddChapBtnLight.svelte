<script>
	export let addText;
</script>

<div class="flex justify-center items-center">
	<div class="flex justify-center items-center rounded-sm  bg-accent gap-1 px-1.5">
		<div class="flex bg-accent rounded-sm self-center  justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 stroke-mainText stroke-[3px] self-center"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		</div>
		<div class=" text-mainText font-medium">Add {addText}</div>
	</div>
</div>

<script>
	export let addText;
</script>

<div class="flex items-center justify-center">
	<div class="flex items-center justify-center gap-1 outline outline-1 outline-black bg-white px-1.5">
		<div class="flex justify-center self-center   bg-mainDark">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-4 w-4 self-center stroke-white stroke-[3px]"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		</div>
		<div class=" font-medium text-mainText">Add {addText}</div>
	</div>
</div>

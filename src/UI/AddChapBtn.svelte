<script>
	export let addText;
</script>

<div class="flex justify-center items-center">
	<div
		class="flex justify-center items-center rounded-sm outline outline-1 outline-primary bg-white gap-1 px-1.5 h-[27px]"
	>
		<div class="flex bg-primary rounded-sm w-[18px] h-[18px] self-center  justify-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 stroke-white stroke-[3px] self-center"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
			</svg>
		</div>
		<div class=" text-mainText font-medium">Add {addText}</div>
	</div>
</div>

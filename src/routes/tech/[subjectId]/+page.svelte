<script>
	import { Heading } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	let subjectId;
	let modules = [];

	$: subjectId = $page.params.subjectId;

	onMount(async () => {
		if (subjectId) {
			try {
				console.log(`../../data/modules/${subjectId}.json`);
				const module = await import(`../../../data/modules/${subjectId}.json`);
				modules = module.default;
			} catch (error) {
				console.error('Error loading module:', error);
			}
		}
	});
	let items = Array.from({ length: 50 }, (_, i) => `Item${i + 1}`);
</script>

<div class="flex flex-row h-full text-gray-700 dark:text-white overflow-y-auto">
	<div class="mx-6 m-8 w-full">
		<Heading tag="h4" class=" mb-8 mt-10 font-bold border-b-[.1rem] border-solid border-dark-primary-400" style="font-variant: small-caps"
			>{subjectId}</Heading
		>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-x-6">
			{#each modules as module}
				<div
					style="height: 280px;"
					class="relative w-full cursor-pointer overflow-hidden rounded border border-solid border-gray-L200 bg-gray-L25 bg-opacity-50 p-2 outline-0 dark:border-gray-D1000 dark:bg-gray-D1300 mb-8 min-w-full sm:min-w-[calc(((100%-48px)/3))] lg:min-w-[calc(((100%-72px)/4))]"
				>
					<Heading tag="h6" class=" h-1/6 font-bold" >{module.name}</Heading>
					<div class="h-5/6 scroll-smooth b-2 overflow-y-scroll border border-gray-300 p-2">
						{#each items as item}
							<a href={base + '/tech/' + subjectId + '/' + item}
								><div class="p-2 border-b last:border-b-0">{item}</div></a
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

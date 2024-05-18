<script>
	import { Heading } from 'flowbite-svelte';
	import { base } from '$app/paths';
	import subjects from '../../data/subjects.json';

	function getImageUrl(name) {
  	return new URL(`../../lib/assets/images/${name}.png`, import.meta.url).href
	}
</script>

<div class="flex flex-row h-full text-gray-700 dark:text-white overflow-y-auto">
	<div class="mx-6 m-8 w-full">
		<Heading tag="h4" class=" mb-8 mt-10 font-bold">Popular technologies &amp; languages</Heading>
		<div class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-x-6">
			{#each subjects as subject}
				<a
					class="relative w-full cursor-pointer overflow-hidden rounded border border-solid border-gray-L200 bg-gray-L25 bg-opacity-50 p-6 outline-0 transition-all hover:-translate-y-1 hover:border hover:border-solid hover:border-gray-L200 hover:shadow-lg dark:border-gray-D1000 dark:bg-gray-D1300 mb-8 min-w-full sm:min-w-[calc(((100%-48px)/3))] lg:min-w-[calc(((100%-72px)/4))]"
					data-testid="catalog-card"
					id={subject.id}
					href={base + '/tech/' + subject.id}
					style="height: 132px;"
					><div class="flex h-full flex-col justify-between">
						<div class="h-10 w-10">
							<div class="h-full w-full">
								<span
									style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"
								>
									<span
										style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;"
									/>
									<img 
									alt={subject.name} 
									sizes="(max-width: 950px) 100vw, 30vw" 
									src={getImageUrl(subject.img)} decoding="async" 
									class="object-contain	" style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;">
									<noscript />
								</span>
							</div>
						</div>
						<Heading tag="h6" class="m-0 text-gray-L900 dark:text-gray-D50">{subject.name}</Heading>
						<!-- <p class="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p> -->
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

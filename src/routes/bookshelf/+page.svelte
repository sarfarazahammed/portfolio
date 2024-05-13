<script>
	import {
		Card,
		Button,
		Toggle,
		Blockquote,
		Heading,
		Accordion,
		AccordionItem,
		Gallery
	} from 'flowbite-svelte';
	import { ArrowRightOutline, BookSolid } from 'flowbite-svelte-icons';
	import bookGroups from '../../data/bookshelf.json';

	let vCard = false;
</script>

<div class="flex flex-col h-full overflow-y-auto">
	<Blockquote size="md" class="p-2">
		"Every month, I delve into a diverse array of books, and from this literary adventure, I'd like
		to share a curated selection that I believe you'll find inspiring."
	</Blockquote>
	<div class=" p-2">
		<Accordion activeClass="h-10">
			{#each bookGroups as bookGroup}
				<AccordionItem class="">
					<span slot="header" class="text-base flex gap-2">
						<BookSolid class="mt-0.5" />
						<span>{bookGroup.name} </span>
					</span>
					<Gallery class="pt-2 border-2 h-64 md:h-72 gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 snap-y snap-mandatory overflow-y-auto overflow-x-hidden">
						{#each bookGroup.books as book}
							<div class="snap-center">
								<img src={book.image} alt={book.name} class="max-w-full book_poster" />
							</div>
						{/each}
					</Gallery>
	
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</div>



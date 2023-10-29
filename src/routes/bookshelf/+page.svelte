<script>
	import { Card, Button, Toggle, Blockquote, Heading } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	let vCard = false;
</script>

<div class="m-3 flex flex-col h-full">
	<Blockquote size="lg"
		>"Every month, I delve into a diverse array of books, and from this literary adventure, I'd like
		to share a curated selection that I believe you'll find inspiring."</Blockquote
	>
	<Heading tag="h4">Programming</Heading>
	<div class="grid grid-cols-1 md:grid-cols-3">
		<Card class="m-2" img="https://m.media-amazon.com/images/I/51b7XbfMIIL._SY522_.jpg" horizontal>
			<h6 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
				Clean Code
			</h6>
			<p class="mb-2 text-gray-700 dark:text-gray-400 leading-tight">
				A timeless guide to writing maintainable and elegant software. It offers practical insights
				on improving code quality, readability, and design, emphasizing the importance of clean,
				efficient, and understandable code. This book is a must-read for developers looking to
				elevate their coding skills.
			</p>
			<a href="https://amzn.to/479fqbf" target="_blank">
				<Button>
					Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
				</Button>
			</a>
		</Card>
		<Card class="m-2" img="https://m.media-amazon.com/images/I/61L9hHTU7zL._SY522_.jpg" horizontal>
			<h6 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
				Java Concurrency in practice
			</h6>
			<p class="mb-2 text-gray-700 dark:text-gray-400 leading-tight">
				This book provides in-depth insights into mastering concurrent programming in Java, offering
				practical strategies and best practices for building robust, multithreaded applications. It
				is an essential resource for Java developers looking to harness the full power of
				concurrency
			</p>
			<a href="https://amzn.to/40e7cMA" target="_blank">
				<Button>
					Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
				</Button>
			</a>
		</Card>
	</div>
</div>

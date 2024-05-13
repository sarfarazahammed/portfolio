<script>
	import TopNav from '../lib/top-nav.svelte';
	import { Footer, FooterCopyright } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="app-container flex flex-col w-screen h-screen">
	<div class="relative">
		<TopNav />
	</div>
	<slot />
	<Footer class="max-h-10 px-1 sm:px-1 py-1.5 sm:py-0.5 sm:max-h-12 z-20 text-align-center">
		<FooterCopyright href={base + '/'} by="SyedSarfarazAhammed™" year={2023} />
	</Footer>
</div>

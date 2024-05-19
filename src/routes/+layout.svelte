<script>
	import TopNav from '../lib/top-nav.svelte';
	import { Footer, FooterCopyright } from 'flowbite-svelte';
	import { base } from '$app/paths';
</script>

<div class="h-[100dvh] flex flex-col w-screen">
	<div class="relative">
		<TopNav />
	</div>
	<slot />
	<div class="relative">
		<Footer
			class="bg-light-bgMain dark:bg-dark-bgMain shadow-[0_.6rem_.3rem_0_rgba(26,61,60,.08)] border-t-[.1rem] border-solid border-light-primary-100 dark:border-dark-primary-100  transition-colors duration-750 max-h-10 px-1 sm:px-1 py-1.5 sm:py-0.5 sm:max-h-12 z-20 text-align-center "
		>
			<FooterCopyright
				spanClass="text-light-secondaryText dark:text-dark-secondaryText"
				href={base + '/'}
				by="SyedSarfarazAhammed™"
				year={2023}
			/>
		</Footer>
	</div>
</div>

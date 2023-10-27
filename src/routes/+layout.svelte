<script>
	import SideNav from '../lib/side-nav.svelte';
	import TopNav from '../lib/top-nav.svelte';
	import { page } from '$app/stores';
	import { Drawer, Button, CloseButton, Footer, FooterCopyright } from 'flowbite-svelte';
	import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	let hidden1 = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
	let innerWidth;
	let drawerHidden = false;
	let activateClickOutside = false;
	let backdrop = false;
</script>

<svelte:window bind:innerWidth />
<div class="app-container flex flex-col w-screen h-screen">
	<TopNav />
	<div class="flex flex-row h-screen">
		<!-- {#if innerWidth <= 768}
			<div class="text-center">
				<Button on:click={() => (hidden1 = false)}>Show drawer</Button>
			</div>

			<Drawer transitionType="fly" {transitionParams} bind:hidden={hidden1} id="sidebar1">
				<SideNav />
			</Drawer>
		{:else}
			<SideNav />
		{/if} -->

		<slot />
	</div>
	<Footer>
		<FooterCopyright href="/" by="SyedSarfarazAhammed™" year={2023} />
	</Footer>
</div>

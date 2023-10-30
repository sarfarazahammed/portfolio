<script>
	import SideNav from '../lib/side-nav.svelte';
	import TopNav from '../lib/top-nav.svelte';
	import { page } from '$app/stores';
	import { Drawer, Button, CloseButton, Footer, FooterCopyright } from 'flowbite-svelte';
	import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';

	import { base } from '$app/paths';

	let drawerHidden = false;
	let activateClickOutside = false;
	let backdrop = false;
</script>

<div class="app-container flex flex-col w-screen h-screen">
	<TopNav />
	<div class="flex flex-row h-screen">
		<slot />
	</div>
	<Footer>
		<FooterCopyright href={base + '/'} by="SyedSarfarazAhammed™" year={2023} />
	</Footer>
</div>

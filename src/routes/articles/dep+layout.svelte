<script>
	import { Button, Drawer } from 'flowbite-svelte';
	import SideNav from '../../lib/side-nav.svelte';
	import { sineIn } from 'svelte/easing';
	import {
		AngleLeftSolid,
		AngleRightSolid,
		ArrowRightSolid,
		ArrowRightToBracketSolid
	} from 'flowbite-svelte-icons';
	let innerWidth;
	let hideDrawer = true;
	let transitionParams = {
		x: -320,
		duration: 200,
		easing: sineIn
	};
</script>

<svelte:window bind:innerWidth />
<div class="flex flex-row h-full">
	{#if innerWidth <= 768}
		<div class="text-center">
			<AngleRightSolid class="z-20" on:click={() => (hideDrawer = false)} />
		</div>
		<Drawer
			class="w-54 "
			transitionType="fly"
			{transitionParams}
			bind:hidden={hideDrawer}
			id="sidebar2"
		>
			<div class="flex items-center justify-between">
				<h5
					id="drawer-navigation-label-3"
					class="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
				>
					Article Group
				</h5>
				<AngleLeftSolid on:click={() => (hideDrawer = true)} class="mb-4 dark:text-white" />
			</div>
			<SideNav />
		</Drawer>
	{:else}
		<SideNav />
	{/if}
</div>
<slot />

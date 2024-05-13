<script>
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarDropdownItem,
		SidebarDropdownWrapper,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { base } from '$app/paths';
	import Java from '$lib/assets/icons/java.svelte';
	import {
		ChartPieSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketSolid,
		ShoppingCartSolid,
		BagSolid,
		UsersSolid,
		FileEditSolid,
		CodeSolid
	} from 'flowbite-svelte-icons';
	let activeClass =
		'flex items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700 ';
		let asideClass = 'w-48 h-full border-r-2 border-gray-700 dark:border-gray-200';
</script>

<Sidebar {activeClass} {asideClass}>
	<SidebarWrapper divClass=" overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
		<SidebarGroup>
			<SidebarDropdownWrapper label="Java">
				<svelte:fragment slot="icon">
					<CodeSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<SidebarDropdownItem label="Basics" />
				<SidebarDropdownItem label="Advanced" />
				<SidebarDropdownItem label="Additional" />
			</SidebarDropdownWrapper>
			<SidebarDropdownWrapper label="Python">
				<svelte:fragment slot="icon">
					<CodeSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<SidebarDropdownItem label="Basics" />
				<SidebarDropdownItem label="Advanced" />
				<SidebarDropdownItem label="Additional" />
			</SidebarDropdownWrapper>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>

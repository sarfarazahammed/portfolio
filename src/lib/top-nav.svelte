<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import img from '$lib/assets/images/profile.png';
	import { base } from '$app/paths';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar
	class="max-h-12 px-1 sm:px-1 py-1.5 sm:py-0.5 sm:max-h-14  z-20"
	fluid="true"
	let:NavContainer
>
	<NavContainer class="justify-between max-h-10 sm:max-h-12 ml-2 mr-2 p-1 min-w-full">
		<NavBrand href={base + '/'}>
			<img src={img} class="mr-2 h-4 sm:h-7 rounded-md" alt="profile" />
			<span
				class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
				style="font-variant: small-caps"
				>Sarfaraz Ahammed
			</span>
		</NavBrand>
		<NavHamburger class="mr-2" menuClass="h-5 w-5 shrink-0 md:p-0.5" />
		<NavUl
			{activeUrl}
			class="h-full items-center"
			ulClass="flex flex-col p-1 mt-4 md:mt-1 md:flex-row md:space-x-8 md:text-sm md:font-medium w-auto mr-2"
		>
			<NavLi href={base + '/'}>About Me</NavLi>
			<NavLi class="cursor-pointer"
				>Projects<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
			</NavLi>
			<Dropdown class="w-44 z-20">
				<DropdownItem href={base + '/projects/backend'}>Backend</DropdownItem>
				<DropdownItem href={base + '/projects/frontend'}>Frontend</DropdownItem>
				<DropdownItem href={base + '/projects/data-engineering'}>Data Engineering</DropdownItem>
			</Dropdown>
			<NavLi href={base + '/experience'}>Experience</NavLi>
			<NavLi href={base + '/articles'}>Articles</NavLi>
			<NavLi href={base + '/services'}>Services</NavLi>
			<NavLi href={base + '/contact'}>Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>

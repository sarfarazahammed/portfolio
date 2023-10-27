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

	$: activeUrl = $page.url.pathname;
</script>

<Navbar class="max-h-12 px-1 sm:px-1 py-1.5 sm:py-0.5 sm:max-h-14" fluid="true" let:NavContainer>
	<NavContainer class="justify-between max-h-10 sm:max-h-12 ml-2 mr-2 p-1 min-w-full">
		<NavBrand href="/">
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
			<NavLi href="/">About Me</NavLi>
			<NavLi class="cursor-pointer"
				>Projects<ChevronDownOutline class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline" />
			</NavLi>
			<Dropdown class="w-44 z-20">
				<DropdownItem href="/projects/backend">Backend</DropdownItem>
				<DropdownItem href="/projects/frontend">Frontend</DropdownItem>
				<DropdownItem href="/projects/data-engineering">Data Engineering</DropdownItem>
			</Dropdown>
			<NavLi href="/experience">Experience</NavLi>
			<NavLi href="/articles">Articles</NavLi>
			<NavLi href="/services">Services</NavLi>
			<NavLi href="/contact">Contact</NavLi>
		</NavUl>
	</NavContainer>
</Navbar>

<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownDivider,

		Heading

	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import img from '$lib/assets/images/profile.png';
	import { base } from '$app/paths';
	import { DarkMode } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-light-primary-500 dark:text-dark-primary-700 hover:text-dark-primary-100 dark:hover:text-light-dark-100 border-b-[.1rem] border-solid border-light-primary-100 dark:border-dark-primary-100';
	let btnClass = 'dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-md p-1';
</script>

<Navbar
	class="max-h-12 px-2 sm:px-1 py-2 sm:py-0.5 sm:max-h-14 z-20 w-full top-0 start-0 shadow-[0_.3rem_.6rem_0_rgba(26,61,60,.08)] border-b-[.1rem] border-solid border-light-primary-100 dark:border-dark-primary-100 "
	fluid="true"
	color="none"
	let:NavContainer
>
	<NavContainer fluid="true" class="max-h-10 sm:max-h-12 mx-2 p-1 w-full ">
		<NavBrand href={base + '/'}>
			<img src={img} class="mr-2 h-6 sm:h-9 rounded-md" alt="profile" />
			<span
				class="self-center whitespace-nowrap text-xl font-semibold "
				style="font-variant: small-caps"
				>Sarfaraz <span class="font-bold text-primary-600 dark:text-primary-400">Ahammed</span>
			</span>
		</NavBrand>
		<NavHamburger class="mr-2" menuClass="h-5 w-5 shrink-0 md:p-0.5" />
		<NavUl
			{activeUrl}
			{activeClass}
			class="h-full items-center"
			ulClass="flex flex-col p-1 md:flex-row md:space-x-8 md:text-sm md:font-medium mr-2 items-center"
		>
			<NavLi href={base + '/'}>About Me</NavLi>
			<NavLi class="cursor-pointer"
				>Projects<ChevronDownOutline class="w-3 h-3 ml-2 text-light-primary-500 dark:text-dark-primary-700 inline" />
			</NavLi>
			<Dropdown class="w-44 md:w-22 z-20" {activeUrl} {activeClass}>
				<DropdownItem href={base + '/projects/backend/'}>Backend</DropdownItem>
				<DropdownItem href={base + '/projects/frontend/'}>Frontend</DropdownItem>
				<DropdownItem href={base + '/projects/data-engineering/'}>Data Engineering</DropdownItem>
			</Dropdown>
			<NavLi href={base + '/articles/'}>Articles</NavLi>
			<NavLi href={base + '/services/'}>Services</NavLi>
			<NavLi href={base + '/bookshelf/'}>Bookshelf</NavLi>
			<NavLi><DarkMode {btnClass}/></NavLi>
		</NavUl>
	</NavContainer>
</Navbar>
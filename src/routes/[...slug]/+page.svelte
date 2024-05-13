<script>
	import { page } from '$app/stores';
	import { P } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
	import { base } from '$app/paths';
</script>
<div class="flex items-center h-full justify-center">

	<P>
		You are in page : {activeUrl}<br/>
		👉🏼Under construction...🏗️
		<a href={base + '/'}>👷‍♂️</a>
	</P>
</div>

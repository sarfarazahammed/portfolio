<script>
	import { page } from '$app/stores';
	import { P } from 'flowbite-svelte';
	$: activeUrl = $page.url.pathname;
</script>

<P>
	You are in page : {activeUrl}
</P>

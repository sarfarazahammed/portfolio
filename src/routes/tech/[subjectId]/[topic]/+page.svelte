<script>
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;
	import { base } from '$app/paths';
</script>
<div class="flex flex-row h-full items-center text-center text-primary-50">
  <div class="flex-initial w-48 ">nav1</div>
  <div class="flex-initial w-48">nav2</div>
  <p class="flex-1 ">
		You are in page : {activeUrl}<br/>
		👉🏼Under construction...🏗️
		<a href={base + '/'}>👷‍♂️</a>
	</p>
</div>

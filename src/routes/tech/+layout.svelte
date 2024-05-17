<script>
  let innerWidth;
</script>
<svelte:window bind:innerWidth />
<div class="flex flex-row h-full text-gray-700 dark:text-white overflow-y-auto">
  <!-- {#if innerWidth <= 768}
  {:else}
	{/if} -->
  <div class="flex-none w-48 bg-slate-100	" style="background-color: rgb(249 250 251/1);"></div>
  <div class="flex-none w-48 bg-slate-50	" style="background-color: rgb(249 250 251/0.5);"></div>
  <div class="flex-1"></div>
</div>
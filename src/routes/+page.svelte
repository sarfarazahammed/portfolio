<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { Heading, P, Button, Tooltip, Span } from 'flowbite-svelte';
	import Java from '$lib/assets/icons/java.svelte';
	import Javascript from '$lib/assets/icons/js.svelte';
	import Kafka from '$lib/assets/icons/kafka.svelte';
	import Python from '$lib/assets/icons/python.svelte';
	import Mysql from '$lib/assets/icons/mysql.svelte';
	import Postgresql from '$lib/assets/icons/postgresql.svelte';
	import Mongo from '$lib/assets/icons/mongo.svelte';
	import Docker from '$lib/assets/icons/docker.svelte';
	import Kubernetes from '$lib/assets/icons/kubernetes.svelte';
	import Jenkins from '$lib/assets/icons/jenkins.svelte';
	import Github from '$lib/assets/icons/github.svelte';
	import Gitlab from '$lib/assets/icons/gitlab.svelte';
	import ApacheBeam from '$lib/assets/icons/apache-beam.svelte';
	import GoogleCloud from '$lib/assets/icons/google-cloud.svelte';
	import SvelteIcon from '$lib/assets/icons/svelte-icon.svelte';
	let currentDate = new Date();
	let joiningDate = new Date('2019-05-27');
	const formatter = new Intl.RelativeTimeFormat('en', {
		numeric: 'always'
	});

	$: formattedDateDiff = formatter.format(
		-Math.round(new Date(currentDate.getTime() - joiningDate.getTime()) / 1000),
		'second'
	);
	onMount(() => {
		const interval = setInterval(() => {
			currentDate = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="flex flex-row justify-content items-center align-middle m-3">
	<header class=" flex flex-col justify-center m-2 md:m-3 md:w-2/3 font-mulish">
		<Heading
			tag="h1"
			class="p-1 md:p-3"
			customSize="text-2xl sm:text-3xl font-extrabold  md:text-4xl lg:text-5xl">Hello! 👋</Heading
		>
		<p class="p-1 md:p-3 text-md sm:text-lg lg:text-xl dark:text-gray-400 text-justify">
			I'm <span class="name">Sarfaraz Ahammed Syed</span>, have started working on backend
			engineering
			<span id="exp">{formattedDateDiff}</span>.
		</p>
		<Tooltip
			class="bg-primary-200 text-dark font-light"
			reference="#exp"
			placement="top"
			triggeredBy="#exp">Started on 27-May-2019</Tooltip
		>
		<P class="p-1 md:p-3 text-md sm:text-lg lg:text-xl dark:text-gray-400 text-justify">
			Behind the scenes, I work to ensure tech runs seamlessly. As a backend infrastructure and data
			engineer, I tackle data challenges and build critical yet invisible infrastructure. Join me on
			a journey where complex tech becomes user-friendly solutions, making the digital world better.
			Let's take a journey through my work, where I turn complex technology into user-friendly
			solutions that make the digital world a better place.
		</P>

		<P class="p-1 md:p-3 sm:p-1 text-sm sm:text-md lg:text-lg  md:w-2/3 ">
			<span>Grab me on 🫴 </span> <span class="emoji pointer" />
			<span>
				<a
					href="mailto:syedsarfarazahammed@outlook.com"
					target="_blank"
					class="bg-primary-200 rounded-md p-0.5 text-sm sm:text-md lg:text-lg"
					>syedsarfarazahammed@outlook.com</a
				>
			</span>
		</P>
	</header>
	<div
		class="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-1 align-middle md:w-1/3 p-2 hidden md:visible"
	>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Java />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Python />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Javascript />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Kafka />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Mysql />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Postgresql />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Mongo />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Github />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Gitlab />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Jenkins />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Docker />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<Kubernetes />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl self-center">
			<ApacheBeam />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<GoogleCloud />
		</div>
		<div class="grid-item text-md sm:text-lg font-extrabold md:text-xl lg:text-2xl">
			<SvelteIcon />
		</div>
	</div>
</div>

<style>
	.grid-item {
		padding: 1rem;
		border-radius: 1rem;
		text-align: center;
	}
</style>

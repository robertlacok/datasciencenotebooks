<script>
	import { onMount } from 'svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
	import posthog from 'posthog-js';

	onMount(() => {
		if (!window.location.href.includes('127.0.0.1') && !window.location.href.includes('localhost')) {
			posthog.init('phc_Vw4J1JUtEPD8SDy8nFmBebNm7HVHBEMq004chDx0BTm', { api_host: 'https://app.posthog.com' })
		}
	});
</script>

<div class="content">
	<slot />
</div>

<Footer />

<style>
	.content {
		margin: 0 auto;
		max-width: 1100px;
	}
</style>

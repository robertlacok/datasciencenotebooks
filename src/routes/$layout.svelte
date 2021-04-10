<script>
	import Footer from '$lib/Footer.svelte';
	import '../app.scss';
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

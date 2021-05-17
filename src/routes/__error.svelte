<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let status;
	export let error;
</script>

<div class="pure-g">
	<div class="pure-u">
		<h1>{status}</h1>
		<p>{error.message}</p>
	</div>
</div>

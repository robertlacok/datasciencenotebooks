<script>
	export let name;
	export let url;
	export let license;
	export let setup;
	export let nativeIntegrations;
	export let collaboration;
	export let comments;
	export let versioning;
	export let reproducibility;
	export let notebooksAsProducts;
</script>

<tr>
	{#if url}
		<td class="sticky-col"><a href={url}>{name}</a></td>
	{:else}
		<td class="sticky-col">{name}</td>
	{/if}
	<td>{license}</td>
	<td>{setup}</td>
	<td>{nativeIntegrations}</td>
	<td>{collaboration}</td>
	<td>{comments}</td>
	<td>{versioning}</td>
	<td>{reproducibility}</td>
	<td>{notebooksAsProducts}</td>
</tr>

<style>
	a {
		color: inherit;
	}

	.sticky-col {
		position: -webkit-sticky;
		position: sticky;
		background-color: white;
		width: 180px;
		min-width: 180px;
		max-width: 180px;
		left: 0px;
	}
</style>

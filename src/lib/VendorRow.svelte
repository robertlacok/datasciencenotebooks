<script>
	export let name;
	export let url;
	export let license;
	export let setup;
	export let nativeIntegrations;
	export let collaboration;
	export let versioning;
	export let reproducibility;
	export let notebooksAsProducts;
</script>

<tr>
	<td><a href={url}>{name}</a></td>
	<td>{license}</td>
	<td>{setup}</td>
	<td>{nativeIntegrations}</td>
	<td>{collaboration}</td>
	<td>{versioning}</td>
	<td>{reproducibility}</td>
	<td>{notebooksAsProducts}</td>
</tr>

<style>
	a {
		color: inherit;
	}
</style>

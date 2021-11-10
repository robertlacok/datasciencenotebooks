<script>
	export let firstVendorInfo;
	export let secondVendorInfo;

	const features = [
		'license',
		'setup',
		'nativeIntegrations',
		'collaboration',
		'comments',
		'versioning',
		'reproducibility',
		'notebooksAsProducts'
	];

	const featuresFormatted = [
		'License',
		'Ease of setup',
		'Native integrations',
		'Collaboration',
		'Comments',
		'Versioning',
		'Reproducibility',
		'Notebooks as products'
	];
</script>

<div class="table">
	<div class="scrolling-wrapper">
		<table class="pure-table pure-table-striped">
			<thead>
				<tr>
					<th>–</th>
					<th>{firstVendorInfo.name}</th>
					<th>{secondVendorInfo.name}</th>
				</tr>
			</thead>
			<tbody>
				{#each features as feature, i}
					<tr>
						<td><strong>{featuresFormatted[i]}</strong></td>
						<td>{firstVendorInfo[feature]}</td>
						<td>{secondVendorInfo[feature]}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	table {
		width: 100%;
		border-collapse: separate;
		border-radius: 5px;
		-moz-border-radius: 5px;
	}
	.scrolling-wrapper {
		overflow-x: auto;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.table {
		width: calc(100% - 1rem);
		margin: 3rem 0.5rem;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 1px #e4e4e4;
		display: inline-block;
	}
</style>

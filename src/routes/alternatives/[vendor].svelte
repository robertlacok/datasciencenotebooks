<script context="module">
	import VendorList from '$lib/vendors.json';

	export async function load({ page: { params } }) {
		const vendor = params.vendor;

		const vendorInfo = VendorList.vendors.filter((obj) => {
			return obj.slug === vendor;
		})[0];

		if (vendor) {
			return {
				props: {
					vendor
				}
			};
		} else {
			return {
				status: 404,
				error: 'Not found.'
			};
		}
	}
</script>

<script>
	import VendorGrid from '$lib/VendorGrid.svelte';
	import VendorRow from '$lib/VendorRow.svelte';
	import VendorTable from '$lib/VendorTable.svelte';

	export let vendor;

	const vendorInfo = VendorList.vendors.filter((obj) => {
		return obj.slug === vendor;
	})[0];

	const otherVendors = VendorList.vendors.filter((obj) => {
		return obj.slug !== vendor;
	});
	const otherVendorsCompareUrl = otherVendors.map((obj) => {
		return { ...obj, url: `/compare/${vendor}/${obj.slug}` };
	});
</script>

<div class="header">
	<div class="pure-g">
		<div class="pure-u-1">
			<h1>Alternatives to {vendorInfo.name}</h1>
			<p>
				Explore other notebooks like {vendorInfo.name}.
			</p>
			<p>Comparison with {VendorList.vendors.length - 1} other data science notebooks.</p>
		</div>
	</div>
</div>

<VendorTable>
	<VendorRow {...vendorInfo} />
	{#each otherVendorsCompareUrl as v}
		<VendorRow {...v} />
	{/each}
</VendorTable>

<VendorGrid items={otherVendors} />

<style lang="scss">
	.header {
		padding: 1rem;
		text-align: center;
		margin-top: 6rem;
		margin-bottom: 3rem;
		h1 {
			font-size: 3.4rem;
		}
		p {
			font-size: 1.2rem;
		}
	}
</style>

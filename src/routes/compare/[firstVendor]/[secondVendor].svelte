<script context="module">
	import VendorList from '$lib/vendors.json';

	export async function load({ page: { params } }) {
		const firstVendor = params.firstVendor;
		const secondVendor = params.secondVendor;

		const firstVendorInfo = VendorList.vendors.filter((obj) => {
			return obj.slug === firstVendor;
		})[0];
		const secondVendorInfo = VendorList.vendors.filter((obj) => {
			return obj.slug === secondVendor;
		})[0];

		if (firstVendorInfo && secondVendorInfo) {
			return {
				props: {
					firstVendor,
					secondVendor
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
	import ComparisonTable from '$lib/ComparisonTable.svelte';
	import VendorCard from '$lib/VendorCard.svelte';

	export let firstVendor;
	export let secondVendor;

	const firstVendorInfo = VendorList.vendors.filter((obj) => {
		return obj.slug === firstVendor;
	})[0];
	const secondVendorInfo = VendorList.vendors.filter((obj) => {
		return obj.slug === secondVendor;
	})[0];
</script>

<div class="header">
	<div class="pure-g">
		<div class="pure-u-1">
			<h1>{firstVendorInfo.name} vs. {secondVendorInfo.name}</h1>
			<p>The comparison of the two data science notebooks. Both of them are great tools!</p>
			<p>The table below summarizes some of the main differences.</p>
			<a class="pure-button" href="/">See all notebooks</a>
		</div>
	</div>
</div>

<div class="content">
	<div class="pure-g">
		<div class="pure-u-sm-1-2 pure-u-1">
			<div class="col">
				<VendorCard {...firstVendorInfo} />
			</div>
		</div>
		<div class="pure-u-sm-1-2 pure-u-1">
			<div class="col">
				<VendorCard {...secondVendorInfo} />
			</div>
		</div>
	</div>
</div>

<ComparisonTable {firstVendorInfo} {secondVendorInfo} />

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
	.col {
		padding: 1rem;
	}

	.content {
		padding: 1rem;
	}
</style>

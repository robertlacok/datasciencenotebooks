<script lang="ts">
	import Header from '$lib/Header.svelte';
	import VendorList from '$lib/vendors.json';
	import VendorRow from '$lib/VendorRow.svelte';
	import VendorTable from '$lib/VendorTable.svelte';
	import VendorGrid from '$lib/VendorGrid.svelte';
	import FAQ from '$lib/FAQ.svelte';
</script>

<Header />

<VendorGrid items={VendorList.vendors} />

<VendorTable>
	{#each VendorList.vendors as v}
		<VendorRow {...v} />
	{/each}
</VendorTable>

<FAQ />

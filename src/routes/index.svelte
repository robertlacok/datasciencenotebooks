<script lang="ts">
	import Header from '$lib/Header.svelte';
	import VendorList from '$lib/vendors.json';
	import VendorRow from '$lib/VendorRow.svelte';
	import VendorTable from '$lib/VendorTable.svelte';
	import VendorGrid from '$lib/VendorGrid.svelte';
</script>

<Header />

<VendorGrid />

<VendorTable>
	{#each VendorList.vendors as v}
		<VendorRow {...v} />
	{/each}
</VendorTable>

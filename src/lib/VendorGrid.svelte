<script>
	import VendorCard from '$lib/VendorCard.svelte';
	import VendorList from '$lib/vendors.json';

	import Masonry from './Masonry.svelte';

	let items = VendorList.vendors;
	let [minColWidth, maxColWidth, gap] = [400, 600, 10];
	let width, height;
</script>

<Masonry {items} {minColWidth} {maxColWidth} {gap} let:item bind:width bind:height>
	<VendorCard {...item} />
</Masonry>

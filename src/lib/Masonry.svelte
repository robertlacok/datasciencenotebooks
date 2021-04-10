<script>
	export let items = [];
	export let minColWidth = 330;
	export let maxColWidth = 500;
	export let gap = 20;
	export let id = `id`; // https://svelte.dev/tutorial/keyed-each-blocks
	export let width = 0;
	export let height = 0;
	export let animate = true;

	$: nCols = Math.min(items.length, Math.floor(width / (minColWidth + gap)) || 1);
	$: itemsToCols = items.reduce(
		(cols, item, idx) => {
			cols[idx % cols.length].push([item, idx]);
			return cols;
		},
		Array(nCols)
			.fill()
			.map(() => [])
	);
	function getId(item) {
		if (typeof item === `object`) return item[id];
		if ([`string`, `number`].includes(typeof item)) return item;
	}
</script>

<div class="masonry" bind:clientWidth={width} bind:clientHeight={height} style="gap: {gap}px;">
	{#each itemsToCols as col}
		<div class="col" style="gap: {gap}px; max-width: {maxColWidth}px;">
			{#if animate}
				{#each col as [item, idx] (getId(item) ?? idx)}
					<slot {idx} {item} />
				{/each}
			{:else}
				{#each col as [item, idx] (getId(item) ?? idx)}
					<slot {idx} {item} />
				{/each}
			{/if}
		</div>
	{/each}
</div>

<style>
	.masonry {
		display: flex;
		justify-content: center;
		overflow-wrap: anywhere;
		box-sizing: border-box;
	}
	.col {
		display: grid;
		height: max-content;
		width: 100%;
	}
</style>

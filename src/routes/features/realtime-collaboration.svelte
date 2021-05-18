<script>
	import VendorGrid from '$lib/VendorGrid.svelte';

	import VendorList from '$lib/vendors.json';

	const rtcVendors = VendorList.vendors.filter((obj) => {
		if (obj.collaboration.includes('Real-time')) {
			return obj;
		}
	});
</script>

<div class="header">
	<div class="pure-g">
		<div class="pure-u-1">
			<h1>Real-time collaboration in Jupyter</h1>
			<p>
				<a href="https://github.com/jupyterlab/rtc">Coming soon</a>. Explore other notebooks in the meantime.
			</p>
		</div>
	</div>
</div>

<article>
	<div class="pure-g">
		<div class="pure-u-md-1-4 pure-u-0" />
		<div class="pure-u-md-1-2 pure-u-1">
			<div class="column">
				<p>
					Data science is a team sport. We share our findings, consult domain knowledge and need a second pair of eyes
					for our code. However, the number one tool used by 95% of data scientists works best when used solo.
				</p>
				<p>
					People share <code>.ipynb</code> files by sending them back and forth. They send static screenshots of charts to
					ask questions. Code reviews get done on messy JSON structures or involve transformations before comitting. Often,
					these hurdles lead to less sharing, less talking, and almost no code review.
				</p>
				<p>
					A new generation of tools aims to solve these problems. They promote notebooks to a first class citizen among
					company documents, accessible by everyone.
				</p>
			</div>
		</div>
		<div class="pure-u-md-1-2 pure-u-1" />
	</div>
</article>

<VendorGrid items={rtcVendors} />

<style lang="scss">
	.header {
		padding: 1rem;
		text-align: center;
		margin-top: 6rem;
		h1 {
			font-size: 3.4rem;
		}
		p {
			font-size: 1.2rem;
		}
	}
	.content {
		padding: 1rem;
	}
	.column {
		padding: 1rem;
	}
</style>

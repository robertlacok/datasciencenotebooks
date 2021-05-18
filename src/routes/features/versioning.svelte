<script>
	import VendorGrid from '$lib/VendorGrid.svelte';

	import VendorList from '$lib/vendors.json';

	const rtcVendors = VendorList.vendors.filter((obj) => {
		if (obj.versioning.includes('Native')) {
			return obj;
		}
	});
</script>

<div class="header">
	<div class="pure-g">
		<div class="pure-u-1">
			<h1>Versioning Jupyter notebooks</h1>
			<p>It's hard. Explore other notebooks in the meantime.</p>
		</div>
	</div>
</div>

<article>
	<div class="pure-g">
		<div class="pure-u-md-1-4 pure-u-0" />
		<div class="pure-u-md-1-2 pure-u-1">
			<div class="column">
				<p>
					Data science is a programming discipline, and it often adopts software engineering tools. Teams usually
					version notebooks using <code>git</code> – but it's rarely a good experience.
				</p>
				<p>
					The <code>.ipynb</code> format is a verbose JSON with plenty of metadata, variable outputs and binary blob.
					That prevents
					<code>git diff</code> from doing a good job.
				</p>
				<p>
					Some alternatives are converting it to markdown (a popular tool is <a
						href="https://github.com/mwouts/jupytext">jupytext</a
					>), or integrating a review tool, such as <a href="https://www.reviewnb.com/">ReviewNB</a>.
				</p>
				<p>
					A new generation of tools aims to solve these problems. They version notebooks natively, allowing to travel
					back and forth in time and program exploratively.
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

<script>
	import VendorGrid from '$lib/VendorGrid.svelte';

	import VendorList from '$lib/vendors.json';

	const rtcVendors = VendorList.vendors.filter((obj) => {
		if (obj.comments.includes('Yes')) {
			return obj;
		}
	});
</script>

<div class="header">
	<div class="pure-g">
		<div class="pure-u-1">
			<h1>Comments in Jupyter notebooks</h1>
			<p>GitHub PRs don't really cut it. Explore other options.</p>
		</div>
	</div>
</div>

<article>
	<div class="pure-g">
		<div class="pure-u-md-1-4 pure-u-0" />
		<div class="pure-u-md-1-2 pure-u-1">
			<div class="column">
				<p>
					Data science is a team sport, and the conversation needs to include a number of stakeholders. 
				</p>
				<p>
					There are technical people, other data scientists, who can often offer their point of view on the methods or the technical implementation.
				</p>
				<p>
					Then there are business stakeholders or domain experts, who can offer unique insights on the bigger picture and overall goal, review the conclusion and take action. 
				</p>
				<p>
					Currently, Jupyter notebooks offer a solo experience. Code reviews with technical peers in GitHub are problematic, and collaboration with business stakholders requires introducing several degrees of separation from the original work (such as screnshots in Slides).
				</p>
				<p>
					A new generation of tools aims to solve these problems. They help prepare the narratives using notebooks, present them in views appropriate for non-technical people, and tighten the feedback loop.
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

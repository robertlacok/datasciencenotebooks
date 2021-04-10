<script>
	export let name;
	export let url;
	export let imgSrc;
	export let desc;
	export let videoSrc;
</script>

<div class="item">
	<div class="card">
		<h1>{name}</h1>
		{#if imgSrc}
			<div class="cardImage">
				<img class="pure-img" src={imgSrc} alt="Logo of ${name}" />
			</div>
		{/if}
		{#if videoSrc}
			<iframe title="Video showing ${name}" width="100%" height="300" src={videoSrc} />
		{/if}
		<p>{desc}</p>
		<a class="pure-button" href={url}>Read more.</a>
	</div>
</div>

<style>
	.card {
		margin: 0.5rem;
		padding: 1rem;
		border-radius: 5px;
		box-shadow: 0px 0px 5px 1px #e4e4e4;
	}
	.cardImage {
		width: 100%;
	}
	h1 {
		margin-top: 0rem;
	}
	img {
		max-width: 100%;
		max-height: 100%;
		border-radius: 5px;
	}
</style>

<script>
	import imageUrl from '$lib/images/me.jpeg'
	let linkUrl = 'https://personal-website-svelte-6hf.pages.dev/';
</script>

<!-- <div class="fixed top-4 right-4 z-50"> -->
    <div class="flex justify-end">
<a
	href={linkUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="btn btn-primary btn-lg gap-2"
>
	<img
		src={imageUrl}
		alt="Button image"
		class="w-12 h-12 rounded-full"
	/>
	<span>made by Beniamin</span>
</a>
</div>
<script>
    import "../app.css";
    import { theme } from '$lib/stores/theme';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LinkButton from "../lib/components/LinkButton.svelte";
	import Navbar from "../lib/components/Navbar.svelte";

    import { fontStore } from '$lib/stores/fontStore';
    import { onMount } from 'svelte';

    let fontLink;

    onMount(() => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        fontStore.subscribe(value => {
            link.href = value.fontUrl;
            fontLink = link;
        });
        document.head.appendChild(link);
    });
</script>

<svelte:head>
    {#if fontLink}
        <link rel="stylesheet" href={fontLink.href}>
    {/if}
</svelte:head>
  
  <div data-theme={$theme} style="font-family: {$fontStore.fontFamily}">
    <!-- Your layout content -->
    <div class="flex items-center justify-center flex-row mx-4 my-8">
        <div class="flex-1">
            <ThemeToggle />
        </div>
        <div class="flex-1">
            <Navbar />
        </div>
        <div class="flex-1">
            <LinkButton />  
        </div>
    </div>
    <slot />
  </div>
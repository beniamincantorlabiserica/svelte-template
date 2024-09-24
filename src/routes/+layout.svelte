<script>
    import "../app.css";
    import { theme } from '$lib/stores/theme';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LinkButton from "../lib/components/LinkButton.svelte";
	import Navbar from "../lib/components/Navbar.svelte";

  </script>
  
  <div data-theme={$theme}>
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
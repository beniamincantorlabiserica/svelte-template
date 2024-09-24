<script>
    import "../app.css";
    import { theme } from '$lib/stores/theme';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import LinkButton from "../lib/components/LinkButton.svelte";
  </script>
  
  <div data-theme={$theme}>
    <!-- Your layout content -->
    <div class="flex items-end flex-row gap-8">
        <div>
            <ThemeToggle />
        </div>
        <div>
            <LinkButton />  
        </div>
    </div>
    <slot />
  </div>
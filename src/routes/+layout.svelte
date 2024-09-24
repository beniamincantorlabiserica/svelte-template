<script>
    import "../app.css";
    import { theme } from '$lib/stores/theme';
    import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  </script>
  
  <div data-theme={$theme}>
    <!-- Your layout content -->
    <ThemeToggle />
    <slot />
  </div>
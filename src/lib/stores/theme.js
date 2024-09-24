import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const LIGHT_THEME = 'retro';
const DARK_THEME = 'synthwave';

function getInitialTheme() {
  if (browser) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === LIGHT_THEME || savedTheme === DARK_THEME) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK_THEME : LIGHT_THEME;
  }
  return LIGHT_THEME; // Default theme for SSR
}

export const theme = writable(getInitialTheme());

export function toggleTheme() {
  theme.update(currentTheme => {
    const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    if (browser) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    }
    return newTheme;
  });
}

if (browser) {
  theme.subscribe(value => {
    document.documentElement.setAttribute('data-theme', value);
  });
}
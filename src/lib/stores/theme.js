import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { themeConfig } from '$lib/config/theme-config';

function getInitialTheme() {
  if (browser) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === themeConfig.lightTheme || savedTheme === themeConfig.darkTheme) {
      return savedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? themeConfig.darkTheme 
      : themeConfig.lightTheme;
  }
  return themeConfig.lightTheme; // Default theme for SSR
}

export const theme = writable(getInitialTheme());

export function toggleTheme() {
  theme.update(currentTheme => {
    const newTheme = currentTheme === themeConfig.lightTheme 
      ? themeConfig.darkTheme 
      : themeConfig.lightTheme;
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
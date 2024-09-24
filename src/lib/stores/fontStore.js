import { writable } from 'svelte/store';

export const fontStore = writable({
    fontFamily: 'Playpen Sans, sans-serif',
    fontUrl: 'https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap'
});
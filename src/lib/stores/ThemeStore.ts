import { writable } from 'svelte/store';
import { browser } from "$app/environment";
// import { onMount } from 'svelte';

function createTheme(initTheme = 'dark'){
    const { subscribe, update, set } = writable(initTheme);

    return {
        set,
        subscribe,
        toggle: () => update(theme => theme === 'dark' ? 'light' : 'dark')
    }
}

export const theme = createTheme();


    if(browser){
        theme.set(localStorage.getItem('theme') || 'dark');
        theme.subscribe(value => localStorage.setItem('theme', value));
    }
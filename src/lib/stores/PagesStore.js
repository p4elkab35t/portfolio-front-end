import { writable, readable} from "svelte/store";

export const currentPage = writable(0)

export const pages = readable([
    {
        title: 'About',
        type: true,
        content: '',
    },
    {
        title: 'Skills',
        type: true,
        content: '',
    },
    {
        title: 'CV',
        type: true,
        content: '',
    // },
    // {
    //     title: 'Hobbies',
    //     type: true,
    //     content: '',
    }    
])
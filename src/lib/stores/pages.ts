import { writable } from "svelte/store";

export const pages = writable({
  pageContent: [
    {
      id: 0,
      title: "About",
      content: "This is the home page."
    },
    {
      id: 1,
      title: "Skills",
      content: "This is the about page."
    },
    {
      id: 2,
      title: "CV",
      content: "This is the home page."
    },
    {
      id: 3,
      title: "Projects",
      content: "This is the about page."
    },
    {
      id: 4,
      title: "Contact",
      content: "This is the contact page."
    }
  ]
});

export const currentPage = writable(0);

export const pageScrollPosition = writable(
  new Array(5).fill({
    top: false,
    bottom: false
  })
)
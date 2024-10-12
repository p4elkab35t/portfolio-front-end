import { error } from '@sveltejs/kit';
import { projects } from '$lib/pages/projects_fn.js'; // Adjust the path to your projects array

// Define the types for the load function
export const load = async ({ params }) => {
  const { slug } = params;

  // Find the project based on the slug
  const project = projects.find(proj => proj.link.toLowerCase().replace(/ /g, '-') === slug);

  // If the project is not found, return a 404 error
  if (!project) {
    throw error(404, 'Project not found');
  }

  // Return the project data to the page
  return {
    props: {
      project
    }
  };
};
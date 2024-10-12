<script>
    import { marked } from 'marked';
    export let markdownContent = '';
  
    // Parse the Markdown content to HTML
    const htmlContent = marked(markdownContent);
  </script>
  
  <!-- Render the HTML content safely -->
  <div class="markdown-content">
    {@html htmlContent}
  </div>
  
  <style>
    /* Add any specific styles for Markdown content here */
    .markdown-content {
      /* Example style */
      font-family: Arial, sans-serif;
    }
  </style>
  
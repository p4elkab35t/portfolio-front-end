<!-- Contact.svelte -->
<script lang="ts">
    
    interface ContactLink {
      label: string;
      href: string;
      icon: string;
    }
    
    export let contactLinks: ContactLink[] = [
      { label: 'GitHub', href: 'https://github.com/P4elkaB35t', icon: 'github' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/p4elkab35t/', icon: 'linkedin' },
      { label: 'Telegram', href: 'https://t.me/P4elkaB35t', icon: 'telegram' }
    ];
  </script>
  
    <div class="flex flex-col md:flex-row gap-15 h-full pl-7 md:pl-0 -mt-20">
      <!-- Contact Form -->
      <!-- <div class="flex-1">
        <form class="space-y-5">
          <div>
            <label for="name" class="block mb-1">Name</label>
            <input 
              type="text" 
              id="name" 
              required 
              class="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors duration-300"
            />
          </div>
          <div>
            <label for="email" class="block mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              required 
              class="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors duration-300"
            />
          </div>
          <div>
            <label for="message" class="block mb-1">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              required 
              class="w-full p-2 border border-gray-300 focus:border-black outline-none transition-colors duration-300"
            ></textarea>
          </div>
          <button 
            type="submit" 
            class="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div> -->
      
      <!-- Contact Info -->
      <div class="flex-1 flex flex-col w-full items-center text-center justify-center gap-16">
        <h3 class="text-3xl font-bold mb-5">Get in Touch</h3>
        <ul class="flex flex-row gap-5">
          {#each contactLinks as link}
            <li>
              <a 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-black hover:text-gray-600 transition-colors duration-300"
              >
              <!--icon-->
                  <img src="icons/{link.icon}.svg" alt="{link.label}" class="w-16 h-16 transition-all hover:-mt-1 hover:invert-25">
              </a>
            </li>
          {/each}
        </ul>
        <div class="mt-5">
          <a 
            href="mailto:saganiter234@gmail.com"
            class="text-black hover:text-gray-600 transition-colors duration-300 font-semibold text-xl"
          >
          <img src="icons/email.svg" alt="email" class=" inline w-6 h-6 transition-all hover:invert-25">
          : saganiter234@gmail.com
        </a>
        </div>
      </div>
    </div>
    
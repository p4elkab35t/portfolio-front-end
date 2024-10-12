<!-- About.svelte -->
<script lang="ts">
    export let name: string = 'Pavel Fedorov';
    export let description: string = `    
I am a Full-Stack Web Developer based in Canada, with a strong background in building high-performance web and mobile applications. With expertise in TypeScript, React, and Node.js, I specialize in creating scalable solutions that seamlessly integrate modern technologies like AWS and serverless architectures. My academic background in Information Security, combined with hands-on experience in database management, low-level programming, and cloud infrastructure, allows me to tackle complex challenges with a focus on efficiency and innovation. I am passionate about collaborating with diverse teams, driving agile development processes, and contributing to meaningful digital growth through continuous learning and problem-solving.
`;
  </script>
  
    <div class="flex flex-col md:flex-col items-center gap-15 relative">
      <div class="flex items-center md:items-start flex-col">
      <div class="flex-none w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden">
        <img src="profile-pic.png" alt="Profile" class="w-full h-full object-cover grayscale" />
      </div>
      
      <div class="flex-1 md:pl-15">
        <h3 class="text-5xl font-bold text-zinc-600 mb-4 text-center md:text-left pt-5 pb-10">{name}</h3>
        <p class="text-black md:pr-20 font-semibold text-base sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">{description}</p>
      </div>
    </div>
    </div>
    
    <!-- <div class="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">↓</div> -->
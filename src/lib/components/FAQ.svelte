<script>
    import { slide } from 'svelte/transition';
  
    let faqs = [
      {
        question: "What is SvelteKit?",
        answer: "SvelteKit is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing. It offers server-side rendering out of the box and can be deployed to various platforms."
      },
      {
        question: "How does SvelteKit differ from Svelte?",
        answer: "While Svelte is a component framework, SvelteKit is a full application framework built on top of Svelte. It provides routing, server-side rendering, and other features needed for building complete web applications."
      },
      {
        question: "Is SvelteKit suitable for beginners?",
        answer: "Yes, SvelteKit is designed to be approachable for beginners while also being powerful enough for advanced users. Its intuitive structure and excellent documentation make it a good choice for those new to web development."
      },
      {
        question: "Can I use Tailwind CSS and DaisyUI with SvelteKit?",
        answer: "Absolutely! SvelteKit works great with Tailwind CSS and DaisyUI. You can easily integrate these libraries to create beautiful, responsive user interfaces with pre-built components and utility classes."
      }
    ];
  
    let activeIndex = -1;
  
    function toggleFaq(index) {
      activeIndex = activeIndex === index ? -1 : index;
    }
  </script>
  
  <div class="container mx-auto p-4 max-w-3xl my-8">
    <h2 class="text-3xl font-bold mb-6 text-center text-primary">Frequently Asked Questions</h2>
    <div class="space-y-4">
      {#each faqs as faq, index}
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body p-4">
            <button 
              on:click={() => toggleFaq(index)}
              class="flex justify-between items-center w-full text-left"
            >
              <h3 class="text-xl font-semibold">{faq.question}</h3>
              <svg 
                class="w-6 h-6 transition-transform duration-200 ease-in-out {activeIndex === index ? 'rotate-180' : ''}" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {#if activeIndex === index}
              <div transition:slide={{ duration: 300 }} class="mt-4 text-base-content/80">
                <p>{faq.answer}</p>
              </div>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
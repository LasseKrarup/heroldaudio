<template>
  <!-- Hero -->
  <div class="bg-night h-full max-h-screen relative">
    <div class="bg-gradient-to-b from-vista/20 via-transparent h-full flex flex-col justify-center  pt-16">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 before:absolute before:bottom-0 before:bg-[url(/assets/bgtile-repeat.png)] before:start-1/2 before:size-full before:opacity-20 before:transform before:-translate-x-1/2">

        <!-- Title -->
        <div class="max-w-3xl text-center mx-auto relative z-10">
          <h1
            class="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Få dit musik-gear til at spille  igen
          </h1>
        </div>
        <!-- End Title -->

        <div class="max-w-3xl text-center mx-auto relative z-10">
          <p class="text-lg text-gray-400">
            Reparation af blandt andet guitarforstærkere, effektpedaler, PA-systemer
            og synthesizere efterset af en professionel musiker, der ved, hvad grejet skal kunne holde til
          </p>
        </div>

        <!-- Buttons -->
        <div class="text-center z-10 relative">
          <NuxtLink
            class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition-shadow py-3 px-6 dark:focus:ring-offset-gray-800"
            to="/kontakt"
          >
            Kom i kontakt
            <svg
              class="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NuxtLink>
        </div>
        <!-- End Buttons -->
      </div>
    </div>

  </div>
  <!-- End Hero -->
</template>

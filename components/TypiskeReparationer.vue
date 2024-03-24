<template>
  <section class="bg-white dark:bg-gray-900 flex flex-col">
    <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Typiske reparationer
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400 text-justify">
          Der er mange reparationer, som vi ser igen og igen. Nogle bestemte
          forstærkere har nogle medfødte problemer, som det er smart at komme
          til livs så hurtigt som muligt, og andre problemer er ganske enkelt
          bare udbredt på tværs af modeller. Her er et udpluk af nogle af de
          reparationer, vi laver mest.
        </p>
      </div>
      <div
        class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
      >
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Rørskifte og bias-indstilling
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Hvis du har en rørforstærker, vil du opleve, at du er nødt til at få
            udskiftet rør en gang imellem. Vi har lavet tonsvis af rørskift, og
            vi sørger for at bias-indstille rørene i samråd med dig, så du får
            den tone, du gerne vil have.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Service af mekaniske dele
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Servicering af potentiometre, jack- og XLR inputs/outputs, kontakter
            og alle andre bevægelige dele er altid udsat på forstærkere og andet
            elektronik. Vi servicerer de mekaniske dele såvidt muligt og
            rådgiver omkring udskiftning, hvis det er nødvendigt.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Fender Hot Rod og Blues Deluxe
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Fender Hot Rod Deluxe og Blues Deluxe har en medfødt fejl, hvor
            særlige komponenter bliver så varme, at de brænder selve printpladen
            i forstærkeren op. Hvis ikke det bliver fikset i tide, kan det
            medføre store problemer senere.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Foot switches</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Foot switches på effektpedaler er et klassisk sårbart punkt. Vi
            udskifter foot switches eller kan modificere effektpedaler til true
            bypass.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Udskiftning af højttalerenheder
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Vi skifter enhederne på dine højttalere eller din forstærker, hvis
            membranen, fastmagneten eller elektromagneten er i stykker.
          </p>
        </div>
        <div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">
            Eliminering af støj
          </h3>
          <p class="text-gray-500 dark:text-gray-400">
            Vi laver modifikationer og fejlfinding, hvis dine højttalere eller
            din effektpedal støjer
          </p>
        </div>
      </div>

      <div class="max-w-screen-md mt-8 lg:mt-16 mx-auto">
        <p class="text-gray-500 sm:text-xl dark:text-gray-400 py-4">
          Har du brug for andre reparationer eller rådgivning end det, der er
          nævnt her?
        </p>
        <!-- Buttons -->
        <div class="text-center">
          <NuxtLink
            class="transition-shadow inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
            to="/kontakt"
          >
            Kontakt os
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
  </section>
</template>

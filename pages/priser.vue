<template>
<!-- Pricing -->
<section class="bg-white dark:bg-slate-900 h-full">
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-16 ">
    <!-- Title -->
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14 ">
      <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Prisoversigt</h2>
      <p class="mt-1 text-gray-600 dark:text-gray-400">Det er ofte meget svært at prissætte arbejde på elektroniske apparater, især hvis der er tale om tilbagevendende problemer. Priserne herunder er derfor kun vejledende og uden reservedele. Vi vil altid prøve at nærme os en pris sammen med dig.</p>
    </div>
    <!-- End Title -->
    <!-- Grid -->
    <div class="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#334155,transparent)]">
      <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        <!-- Card -->
        <div class="flex flex-col h-full text-center">
          <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Diagnostik</h4>
          </div>
          <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <div class="grid grid-rows-2 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">DKK</span>
              <p>450</p>
            </div>
          </div>
          <div class="bg-white flex justify-center lg:mt-px py-7 px-8 dark:bg-slate-900">
            <ul class="space-y-2.5 text-center text-sm">
              <li class="text-gray-800 dark:text-gray-400">
                Identifikation af umiddelbare problemer
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Dokumentation af eventuelle fejl
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Pålægges alle forstærkere og visse PA-anlæg
              </li>
            </ul>
          </div>
        </div>
        <!-- End Card -->
        <!-- Card -->
        <div class="flex flex-col h-full text-center">
          <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Service</h4>
          </div>
          <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <div class="grid grid-rows-2 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">DKK</span>
              <p>450-700</p>
            </div>
          </div>
          <div class="bg-white flex justify-center lg:mt-px py-7 px-8 dark:bg-slate-900">
            <ul class="space-y-2.5 text-center text-sm">
              <li class="text-gray-800 dark:text-gray-400">
                Indvendig rens
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Service af potentiometre og inputs/outputs
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Tjek af elektrolytiske kondensatorer og sikringer
              </li>
            </ul>
          </div>
        </div>
        <!-- End Card -->
        <!-- Card -->
        <div class="flex flex-col h-full text-center">
          <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Værkstedspris</h4>
          </div>
          <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <div class="grid grid-rows-2 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">DKK</span>
              <p>450 <span class="text-sm font-light text-gray-500">/time</span></p>
            </div>
          </div>
          <div class="bg-white flex justify-center lg:mt-px py-7 px-8 dark:bg-slate-900">
            <ul class="space-y-2.5 text-center text-sm">
              <li class="text-gray-800 dark:text-gray-400">
                Fast timepris for udført arbejde
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Gælder pr. påbegyndt halve time
              </li>
            </ul>
          </div>
        </div>
        <!-- End Card -->
        <!-- Card -->
        <div class="flex flex-col h-full text-center">
          <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
            <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Guitar/bas</h4>
          </div>
          <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
            <div class="grid grid-rows-2 font-bold text-5xl text-gray-800 dark:text-gray-200">
              <span class="font-bold text-2xl -me-2">DKK</span>
              <p>475 <span class="text-sm font-light text-gray-500">/time</span></p>
            </div>
          </div>
          <div class="bg-white flex justify-center lg:mt-px py-7 px-8 dark:bg-slate-900">
            <ul class="space-y-2.5 text-center text-sm">
              <li class="text-gray-800 dark:text-gray-400">
                Arbejdet udføres af <NuxtLink to="https://www.kraftguitars.dk" class="text-vista">Kraft Guitars</NuxtLink>
              </li>
              <li class="text-gray-800 dark:text-gray-400">
                Besøg <NuxtLink to="https://www.kraftguitars.dk" class="text-vista">www.kraftguitars.dk</NuxtLink> for flere priser
              </li>
            </ul>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Grid -->
    <div class="text-center z-10 relative mt-8">
              <NuxtLink
                class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent transition-shadow hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
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
  </div>
</section>
<!-- End Pricing -->



</template>

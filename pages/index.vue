<template>
  <div>
    <Hero />
    <Features></Features>

    <section class="bg-night">
      <div class="grid grid-cols-2 place-content-between container mx-auto">
        <div class="my-auto px-24">
          <h2 class="font-light tracking-wide text-white md:text-2xl mb-4">Elektronik er vores speciale</h2>
          <p class="font-light tracking-tight text-gray-400 text-lg">Hos Herold Audio er elektronikken fokusområdet, men det betyder ikke, vi ikke laver andre opgaver også. Vi samarbejder nemlig med <NuxtLink to="https://www.kraftguitars.dk" class="text-vista">Kraft Guitars</NuxtLink>, som tager sig af alt mekanisk arbejde på vores guitarer og basser.</p>
        </div>
        <div>
          <NuxtImg src="/assets/amp_background.png" alt="Floating guitar amplifier" />
        </div>
      </div>
    </section>

    <TypiskeReparationer></TypiskeReparationer>

  </div>
</template>
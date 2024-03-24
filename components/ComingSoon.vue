<template>
  <main class="bg-night relative flex min-h-screen">
    <div
      class="container relative mx-auto grow grid grid-cols-1 grid-rows-1 place-content-around"
    >
      <div
        class="pointer-events-none col-start-1 row-start-1 flex items-center justify-center z-10 overflow-hidden"
      >
        <img
          class="scale-150 md:scale-100"
          src="assets/amp_background.png"
          alt="guitar amplifier repair shop Herold Audio"
        />
        <div class="absolute inset-0 bg-night bg-opacity-20"></div>
      </div>
      <div
        class="col-start-1 row-start-1 flex flex-col items-center justify-center z-20"
      >
        <div class="grow flex justify-center items-center flex-col w-full">
          <div class="w-3/4 pt-40">
            <h1
              class="text-white font-inter tracking-tight text-lg md:text-2xl mb-4"
            >
              Kommer snart
            </h1>
            <p
              class="text-gray-100 font-inter text-base md:text-xl tracking-tighter"
            >
              Reparation af guitarforstærkere, effektpedaler, <br />PA-systemer,
              synthesizere og meget mere
            </p>
          </div>
        </div>
        <div
          class="grow-0 flex flex-col items-center pb-10 md:pb-20 font-inter tracking-wide text-gray-400"
        >
          <p>lasse@heroldaudio.dk</p>
          <p class="text-sm md:text-base">CVR: 44706415</p>
        </div>
      </div>
    </div>
  </main>
</template>
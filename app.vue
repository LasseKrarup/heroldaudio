<template>
  <div class="flex flex-col min-h-screen font-inter relative">
    <div class="grow-0 absolute top-0 z-20 w-full">
      <Navbar></Navbar>
    </div>
    <div class="grow">
        <NuxtPage />
    </div>
    <div class="grow-0">
      <Footer></Footer>
    </div>
  </div>
</template>

<style>

</style>
<template>
  <header
    :class="
      'flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm h-16 py-4 dark:bg-gray-800 ' +
      (isHome
        ? 'md:bg-transparent bg-gray-800 md:dark:bg-transparent'
        : 'bg-white dark:bg-gray-800')
    "
  >
    <nav
      :class="
        'max-w-[85rem] w-full m-auto px-4 pb-4 sm:flex sm:items-center sm:justify-between ' +
        (isHome ? 'bg-gray-800 md:bg-transparent' : 'bg-white dark:bg-gray-800') 
      "
      aria-label="Global"
    >
      <div class="flex items-center justify-between">
        <NuxtLink
          :class="
            'flex-none text-xl font-semibold dark:text-white ' +
            (isHome && 'text-white')
          "
          to="/"
          >Herold Audio
        </NuxtLink>
        <div class="sm:hidden">
          <button
            type="button"
            :class="
              'hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            "
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
            id="toggleBtn"
          >
            <svg
              class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
              <line
                x1="3"
                x2="21"
                y1="6"
                y2="6"
              />
              <line
                x1="3"
                x2="21"
                y1="12"
                y2="12"
              />
              <line
                x1="3"
                x2="21"
                y1="18"
                y2="18"
              />
            </svg>
            <svg
              class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
      >
        <div
          class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
        >
          <NavbarButton
            to="/"
            :isHome
            >Hjem</NavbarButton
          >
          <NavbarButton
            to="/about"
            :isHome
            >Om os</NavbarButton
          >
          <NavbarButton
            to="/priser"
            :isHome
            >Priser</NavbarButton
          >
          <NavbarButton
            to="/kontakt"
            :isHome
            >Kontakt</NavbarButton
          >

          <!-- Dark mode button start -->
          <button
            type="button"
            class="hs-dark-mode-active:hidden block hs-dark-mode group flex items-center text-gray-400 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
            data-hs-theme-click-value="dark"
            @click="$colorMode.preference = 'dark'"
          >
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
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>
          <button
            type="button"
            class="hs-dark-mode-active:block hidden hs-dark-mode group flex items-center text-gray-600 hover:text-blue-600 font-medium dark:text-gray-400 dark:hover:text-gray-500"
            data-hs-theme-click-value="light"
            @click="$colorMode.preference = 'light'"
          >
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
              <circle
                cx="12"
                cy="12"
                r="4"
              />
              <path d="M12 8a2 2 0 1 0 4 4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </button>
          <!-- Dark mode button end -->
        </div>
      </div>
    </nav>
  </header>
</template>

<style>
  .navbarActive {
    @apply font-medium text-blue-500 dark:text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600;
  }
</style>

<script setup lang="ts">
  const theRoute = useRoute()
  const isHome = ref(theRoute.path == "/" ? true : false)
  const homeStyle = ref("")
  const colorMode = useColorMode()

  watch(
    () => theRoute.path,
    () => {
      if (theRoute.path == "/") {
        isHome.value = true
      } else {
        isHome.value = false
      }
    }
  )
</script>

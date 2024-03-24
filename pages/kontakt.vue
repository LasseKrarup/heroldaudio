<template>
  <!-- Contact Us -->
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-16 ">
    <div class="max-w-xl mx-auto">
      <div class="text-center">
        <h1
          class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white"
        >
          Kontakt
        </h1>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
          Skriv en henvendelse i kontaktformularen herunder. Prøv at være så
          specifik som mulig, hvis du beskriver et problem på noget udstyr, du
          har. Du er også velkommen til at ringe i stedet.
        </p>
      </div>
    </div>

    <div class="mt-12 max-w-lg mx-auto">
      <!-- Card -->
      <div
        class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700"
      >
        <h2 class="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
          Udfyld skemaet
        </h2>

        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />
          <p class="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div class="grid gap-4 lg:gap-6">
            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-firstname-contacts-1"
                  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >Fornavn</label
                >
                <input
                  type="text"
                  name="hs-firstname-contacts-1"
                  id="hs-firstname-contacts-1"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>

              <div>
                <label
                  for="hs-lastname-contacts-1"
                  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >Efternavn</label
                >
                <input
                  type="text"
                  name="hs-lastname-contacts-1"
                  id="hs-lastname-contacts-1"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>
            </div>
            <!-- End Grid -->

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label
                  for="hs-email-contacts-1"
                  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autocomplete="email"
                  required
                  aria-required="true"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>

              <div>
                <label
                  for="hs-phone-number-1"
                  class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                  >Telefon</label
                >
                <input
                  type="text"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                />
              </div>
            </div>
            <!-- End Grid -->

            <div>
              <label
                for="hs-about-contacts-1"
                class="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                >Detaljer</label
              >
              <textarea
                id="hs-about-contacts-1"
                name="hs-about-contacts-1"
                rows="4"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              ></textarea>
            </div>
          </div>
          <!-- End Grid -->

          <div class="mt-6 grid">
            <button
              type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              Send besked
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-gray-500">
              Du får svar inden for 1-2 arbejdsdage.
            </p>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
    </div>
  </section>
  <!-- End Contact Us -->
</template>

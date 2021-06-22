<template>
  <div>
    <header class="bg-indigo-600">
      <nav class="max-w-7xl mx-auto px-4" aria-label="Top">
        <div
          class="
            w-full
            py-6
            flex
            items-center
            justify-between
            border-b border-indigo-500
            lg:border-none
          "
        >
          <div class="flex items-center space-x-8">
            <nuxt-link
              :to="{ name: 'books' }"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Books
            </nuxt-link>
          </div>
          <div class="ml-10 space-x-4">
            <nuxt-link
              :to="{ name: 'login' }"
              class="
                inline-block
                bg-indigo-500
                py-2
                px-4
                border border-transparent
                rounded-md
                text-base
                font-medium
                text-white
                hover:bg-opacity-75
              "
            >
              Login
            </nuxt-link>
            <a
              href="#"
              class="
                inline-block
                bg-white
                py-2
                px-4
                border border-transparent
                rounded-md
                text-base
                font-medium
                text-indigo-600
                hover:bg-indigo-50
              "
            >
              Sign up
            </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="py-12 px-4 m-auto container">
      <Nuxt />
    </div>
  </div>
</template>

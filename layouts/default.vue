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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>

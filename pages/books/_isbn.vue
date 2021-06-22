<template>
  <div class="container">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">
      Book details - {{ isbn }}
    </h1>
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ book.title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">by {{ book.author }}</p>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div
            v-for="(value, key) in book"
            :key="key"
            class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
          >
            <dt class="text-sm font-medium text-gray-500">{{ key }}</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ value }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isbn: this.$route.params.isbn,
      book: {
        title: 'Become awesome with NuxtJS',
        author: 'John Doe',
      },
    }
  },
  // Head() tauscht Meta Tags im html head aus!
  head() {
    return {
      title: this.isbn + ' - ' + this.book.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.book.author + '-' + this.book.title,
        },
      ],
    }
  },
}
</script>

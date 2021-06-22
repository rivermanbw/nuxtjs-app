<template>
  <div class="container">
    <div v-if="book" class="bg-white shadow overflow-hidden sm:rounded-lg">
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
      book: {},
    }
  },
  // Head() tauscht Meta Tags im html head aus!
  // head() {
  //   return {
  //     // title: this.isbn + ' - ' + this.books.title,
  //     // meta: [
  //     //   {
  //     //     hid: 'description',
  //     //     name: 'description',
  //     //     // content: this.books.author + '-' + this.books.title,
  //     //   },
  //     // ],
  //   }
  // },
  async fetch() {
    let loadingToast
    if (process.client) {
      loadingToast = this.$toast.show('Getting book details...')
    }

    const response = await this.$axios.get(
      'http://localhost:4730/books/' + this.isbn
    )

    // await new Promise((resolve, reject) => {
    //   setTimeout(resolve(), 1500)
    // })
    this.book = response.data

    if (process.client) {
      loadingToast.goAway(0)
      this.$toast.success('Book was successfully loaded', { duration: 3000 })
    }
  },
}
</script>

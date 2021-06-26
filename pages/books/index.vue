<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 mb-4">Books list</h1>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <nuxt-link
        v-for="book in books"
        :key="book.isbn"
        :to="{ name: 'books-isbn', params: { isbn: book.isbn } }"
        class="
          col-span-1
          bg-gradient-to-br
          from-white
          to-gray-50
          rounded-lg
          shadow
          flex-none flex
          hover:shadow-lg
        "
      >
        <img
          width="150"
          height="175"
          class="flex-none mx-auto object-cover"
          :src="book.cover"
          alt=""
        />
        <div class="my-6 mr-6 flex-auto flex flex-col justify-between">
          <h3 class="text-gray-900 font-medium">
            {{ book.title }}
          </h3>
          <span class="text-gray-700"> ISBN: {{ book.isbn }} </span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  meta: {
    requiredRole: 'User',
  },
  async asyncData(context) {
    const response = await context.$axios.get('http://localhost:4730/books')
    return {
      books: response.data,
    }
  },
  head: {
    title: 'Books list',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'All of our best books ever!',
      },
      // {
      //   name: 'description',
      //   content: 'Another description from page without hid',
      // },
    ],
  },
}
</script>

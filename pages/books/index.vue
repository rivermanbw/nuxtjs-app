<template>
  <div class="container">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">Book index</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Books',
    }
  },
  // Head tauscht Meta Tags im html head aus!
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

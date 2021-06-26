<template>
  <div>
    <div class="p-8 text-xl text-center bg-blue-100">
      This is a books.vue file and a parent view for /books path!
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s | Parent component title template',
  },
  meta: {
    requiredRole: 'User_FromParentRoute',
  },
}
</script>

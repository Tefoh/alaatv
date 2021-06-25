<template>
  <div v-if="!isError">
    <p>profile page</p>
  </div>
  <p v-else>مشکلی پیش آمد. دوباره سعی کنید.</p>
</template>

<script>
export default {
  async fetch() {
    try {
      await this.$store.dispatch('getForm')
    } catch (error) {
      this.isError = true
    }
  },
  data: () => ({
    isError: false,
  }),
}
</script>

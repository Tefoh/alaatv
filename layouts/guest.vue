<template>
  <v-app>
    <v-main class="grey lighten-5">
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer absolute app>
      <span>
        تمامی حقوق برای alaatv محفوظ است. &copy;
        {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {}
</script>

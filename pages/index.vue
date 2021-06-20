<template lang="pug">
  .flex.flex-col.items-center.justify-center.w-full.h-screen
    nuxt-link(to="/dev")
      img(
        class="w-40 sm:w-auto"
        src="~/static/jess-logo.png"
        srcset="~/static/jess-logo@2x.png 2x"
      )

    small.uppercase.mt-1.cursor-default(
      class="text-sm sm:text-lg"
    ) Copywriter

    social-links.mt-5
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Home extends Vue {}
</script>

<style scoped>
* {
  position: relative;
  font-family: 'Courier Prime', sans-serif;
}
</style>

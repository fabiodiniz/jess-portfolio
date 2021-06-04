<template lang="pug">
  #jess-portfolio.flex.flex-row
    aside.p-8.flex.flex-col.justify-items-start.items-center.space-y-2.text-center
      img.w-32.rounded-full(src="~/static/jess.png")
      strong.text-lg Jéssica Fernandes
      small Copy Writer

    main.py-4.pr-4.flex.flex-col.flex-nowrap
      nuxt-content(
        v-for="job, index in jobs"
        :key="index"
        :document="job"
      )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ $content }) {
    const jobs = await $content('jobs').fetch()

    return { jobs }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

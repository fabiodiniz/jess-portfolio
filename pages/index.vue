<template lang="pug">
  #jess-portfolio.flex.flex-col.items-center.p-8.mx-auto
    nav.flex.w-full.justify-between.items-center
      .flex.items-center.space-x-2
        a(href="/")
          img(src="~/static/icon-linkedin.png" srcset="~/static/icon-linkedin@2x.png 2x")

        a(href="mailto:jessfernandes.pp@gmail.com")
          img(src="~/static/icon-email.png" srcset="~/static/icon-email@2x.png 2x")

      .flex.flex-col.text-center
        a(href="/")
          img(src="~/static/jess-logo.png" srcset="~/static/jess-logo@2x.png 2x")

        small.text-base.uppercase.mt-1.cursor-default Copywriter

      .menu.flex.flex-col.text-right
        a(href="#") about
        a(href="#") free time

    .line.mt-5.mb-3.w-full

    main.flex.flex-wrap.justify-center
      img(src="~/static/job1.png")
      img(src="~/static/job2.png")
      img(src="~/static/job3.png")
      img(src="~/static/job4.png")
      img(src="~/static/job5.png")
      img.opacity-0(src="~/static/job5.png")

      //- nuxt-content(
      //-   v-for="job, index in jobs"
      //-   :key="index"
      //-   :document="job"
      //- )
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
.line {
  border-bottom: 1px solid #d5d5d5;
}

#jess-portfolio {
  width: 100%;
  max-width: 1210px;
}

nav {
  font-family: 'Courier Prime', sans-serif;
}

nav a {
  color: #494949;
  position: relative;
}

nav .menu a:hover {
  color: black;
}

nav .menu a:hover::before {
  background: black;
}

nav .menu a::before {
  content: '';
  height: 2px;
  width: 14px;
  background: #6a6a6a;
  position: absolute;
  display: block;
  right: 0;
  bottom: 3px;
}

main > * {
  margin: 2px;
}
</style>

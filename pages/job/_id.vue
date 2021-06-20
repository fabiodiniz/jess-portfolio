<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    .job-info.flex.flex-row.items-center.w-full.my-4
      nuxt-link(to="/")
        img(
          alt="Voltar"
          title="Voltar"
          src="~/static/icon-back.png"
          srcset="~/static/icon-back@2x.png 2x"
        )

      copy-text(:text="getUrl()")
        .text-3xl.mx-4.uppercase.font-black
          i Job {{ $route.params.id }}

      spacer

      copy-text(:text="getUrl()")
        img(
          src="~/static/icon-copy.png"
          srcset="~/static/icon-copy@2x.png 2x"
          title="Copiar link"
          alt="Copiar link"
        )

    job-content(:job="{ id: $route.params.id }")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    getUrl () {
      return process.browser
        ? window.document.location.href
        : ''
    }
  }
})
</script>

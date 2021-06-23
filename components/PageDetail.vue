<template lang="pug">
  .flex.flex-row.items-center.w-full.my-4
    nuxt-link(to="/dev")
      img(
        alt="Voltar"
        title="Voltar"
        src="~/static/icon-back.png"
        srcset="~/static/icon-back@2x.png 2x"
      )

    .text-2xl.mx-4.uppercase.font-black.cursor-default
      i {{ title }}

    spacer

    copy-text(:text="getUrl()")
      img(
        src="~/static/icon-copy.png"
        srcset="~/static/icon-copy@2x.png 2x"
        title="Copiar link"
        alt="Copiar link"
      )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class JobContent extends Vue {
  @Prop(String) readonly title?: string

  getUrl () {
    return process.browser
      ? window.document.location.href
      : ''
  }
}
</script>

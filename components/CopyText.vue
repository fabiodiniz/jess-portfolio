<template lang="pug">
  .cursor-pointer(@click="copy")
    slot(name="default")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CustomButton extends Vue {
  @Prop(String) text: string | undefined

  copy () {
    if (!this.text) return

    const url = this.text
    const dummy = document.createElement('textarea')
    document.body.appendChild(dummy)
    dummy.value = url
    dummy.select()
    document.execCommand('copy')
    document.body.removeChild(dummy)
    window.alert('O link foi copiado')
  }
}
</script>

<style>
.spacer {
  flex-grow: 1;
}
</style>

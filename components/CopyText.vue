<template lang="pug">
  .cursor-pointer(@click="copy")
    slot(name="default")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    copy () {
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
})
</script>

<style>
.spacer {
  flex-grow: 1;
}
</style>

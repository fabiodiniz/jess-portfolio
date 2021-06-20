<template lang="pug">
  button.text-xs.bg-gray-200.text-gray-600.border.border-gray-200.rounded-md.py-2.px-5.font-bold.uppercase(
    :type="type"
  )
    slot(name="default")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    type: {
      type: String,
      default: 'submit'
    }
  }
})
</script>

<style scoped>
button:hover {
  opacity: 0.9;
}
</style>

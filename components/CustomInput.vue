<template lang="pug">
  input.text-sm.text-black.placeholder-gray-500.border.border-gray-200.rounded-md.p-2(
    type="text"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', value)"
    class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
  )
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
})
</script>

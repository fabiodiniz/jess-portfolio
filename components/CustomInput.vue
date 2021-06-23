<template lang="pug">
  input.text-sm.text-black.placeholder-gray-500.border.border-gray-200.rounded-md.p-2(
    type="text"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="event => $emit('input', event.target.value)"
    class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
  )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class CustomButton extends Vue {
  @Prop(String) readonly value?: String
  @Prop(String) readonly placeholder?: String
  @Prop(Boolean) readonly disabled?: Boolean
}
</script>

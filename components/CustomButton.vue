<template lang="pug">
  button.text-xs.bg-gray-200.text-gray-600.border.border-gray-200.rounded-md.py-2.px-5.font-bold.uppercase(
    :type="type"
    :disabled="disabled"
  )
    slot(name="default")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CustomButton extends Vue {
  @Prop(String) readonly type: String | undefined
  @Prop(Boolean) readonly disabled: Boolean | undefined
}
</script>

<style scoped>
button:hover {
  opacity: 0.9;
}

button:disabled {
  opacity: 0.5;
  cursor: default;
}
</style>

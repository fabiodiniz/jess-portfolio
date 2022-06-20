<template lang="pug">
  .rich-editor(:class="{ disabled }")
    .content(
      v-if="disabled"
      v-html="value"
    )

    client-only(v-else)
      #grapejs
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import {
  onMounted,
} from '@nuxtjs/composition-api'
// @ts-ignore
import grapesjs from 'grapesjs'
// @ts-ignore
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import 'grapesjs/dist/css/grapes.min.css'

@Component({
  setup (props, { emit }) {
    onMounted(() => {
      if (process.client) {
        setTimeout(() => {
          const editor = grapesjs.init({
            container: '#grapejs',
            components: props.value,
            plugins: [gjsPresetWebpage],
          })

          editor.setComponents(props.value)

          editor.on('update', () => {
            emit('input', editor.getHtml())
          })
        }, 0)
      }
    })
  },
})
export default class RichEditor extends Vue {
  @Prop(String) readonly value?: string
  @Prop(Boolean) readonly disabled?: boolean
  @Prop({ default: () => ({}) }) readonly options?: object
}
</script>

<style>
.ck.ck-editor__editable_inline > :first-child {
  margin-top: 0 !important;
}

.ck.ck-editor__editable_inline {
  padding: 0 !important;
}

.ck-content .table table td,
.ck-content .table table th,
.ck .ck-editor__nested-editable,
.ck-content .table table {
  border: 0 solid white !important;
}

.rich-editor.disabled .ck .ck-widget__selection-handle {
  display: none;
}
</style>

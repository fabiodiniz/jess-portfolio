<template lang="pug">
  .rich-editor
    client-only
      ckeditor(
        :editor="editor"
        :value="value"
        :config="editorConfig"
        @input="ev => $emit('input', ev)"
      )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  components: {
    ckeditor: CKEditor.component,
  },
  setup (props) {
    const editorConfig = props.options

    return { editorConfig, editor: ClassicEditor }
  },
})
export default class RichEditor extends Vue {
  @Prop(String) value: string | undefined
  @Prop({ default: () => ({}) }) options: object | undefined
}
</script>

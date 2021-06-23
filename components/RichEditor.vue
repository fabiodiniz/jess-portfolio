<template lang="pug">
  .rich-editor
    client-only
      ckeditor(
        :editor="editor"
        :value="value"
        :config="editorConfig"
        :disabled="disabled"
        @ready="ready"
        @input="ev => $emit('input', ev)"
      )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicInline from '@ckeditor/ckeditor5-build-inline'
import UploadAdaptor from '~/assets/UploadAdaptor'

@Component({
  components: {
    ckeditor: CKEditor.component,
  },
  setup (props) {
    const editorConfig = props.options

    const ready = (editor: any) => {
      editor
        .plugins
        .get('FileRepository')
        .createUploadAdapter = (loader: any) => {
          return new UploadAdaptor(loader)
        }
    }

    return {
      ready,
      editorConfig,
      editor: ClassicInline,
    }
  },
})
export default class RichEditor extends Vue {
  @Prop(String) readonly value?: string
  @Prop(Boolean) readonly disabled?: boolean
  @Prop({ default: () => ({}) }) readonly options?: object
}
</script>

<style scoped>
.ck.ck-editor__editable_inline > :first-child {
  margin-top: 0 !important;
}

.ck.ck-editor__editable_inline {
  padding: 0 !important;
}
</style>

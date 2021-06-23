<template lang="pug">
  .rich-editor
    client-only
      ckeditor(
        :editor="editor"
        :value="value"
        :config="editorConfig"
        @ready="ready"
        @input="ev => $emit('input', ev)"
      )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
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
      editor: ClassicEditor,
    }
  },
})
export default class RichEditor extends Vue {
  @Prop(String) value: string | undefined
  @Prop({ default: () => ({}) }) options: object | undefined
}
</script>

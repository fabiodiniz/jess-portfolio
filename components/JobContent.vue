<template lang="pug">
  .job-content.cursor-default
    .flex.flex-row.justify-end.mb-3
      custom-button(
        v-show="isLoggedIn"
        @click="publish"
      )
        template(v-if="editing") Publicar
        template(v-else) Editar

    .text-justify(
      v-show="!editing"
      v-html="job.content"
    )

    client-only
      rich-editor.flex-grow(
        v-show="editing"
        :value="job.content"
        @input="onInput"
      )
</template>

<script lang="ts">
import { ref, Ref, useContext } from '@nuxtjs/composition-api'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import useAuth from '~/composables/useAuth'
import useJobs from '~/composables/useJobs'

@Component({
  setup (props) {
    const { $fire } = useContext()
    const job: Job = props.job as Job
    const editing: Ref<boolean> = ref(false)
    const saving: Ref<boolean> = ref(false)
    const newContent: Ref<string> = ref(job?.content || '')
    const { updateJob } = useJobs($fire)

    const updateContent = async (content: string) => {
      const newJob = {
        ...job,
        content,
      }

      await updateJob(newJob)
    }

    const publish = () => {
      saving.value = true
      editing.value = !editing.value
      updateContent(newContent.value)
      saving.value = false
    }

    const onInput = (content: string) => {
      newContent.value = content
    }

    return {
      ...useAuth($fire),
      editing,
      publish,
      onInput,
      updateJob,
      updateContent,
    }
  },
})
export default class JobContent extends Vue {
  @Prop(Object) job: Job | undefined
}
</script>

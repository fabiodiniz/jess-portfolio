<template lang="pug">
  .job-content
    .flex.flex-row.justify-end.mb-3
      custom-button(
        v-show="isLoggedIn"
        :disabled="saving"
        @click="publish"
      ) Publicar

    client-only
      rich-editor.flex-grow(
        :class="{ 'cursor-default': !isLoggedIn }"
        :disabled="!isLoggedIn"
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

    const publish = async () => {
      saving.value = true
      await updateContent(newContent.value)
      saving.value = false
      window.alert('O Job foi atualizado!')
    }

    const onInput = (content: string) => {
      newContent.value = content
    }

    return {
      ...useAuth($fire),
      publish,
      onInput,
      updateJob,
      updateContent,
    }
  },
})
export default class JobContent extends Vue {
  @Prop(Object) readonly job?: Job
}
</script>

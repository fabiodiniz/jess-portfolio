<template lang="pug">
  .job-content
    // Conteúdo/Editor
    client-only
      rich-editor.flex-grow(
        :class="{ 'cursor-default': !isLoggedIn }"
        :disabled="!isLoggedIn"
        :value="job.content"
        @input="onInput"
      )

    // Barra de publicação
    .flex.flex-row.itens-center.justify-center.fixed.bottom-0.left-0.right-0.z-10.bg-gray-500.p-4.mb-0(
      v-show="isLoggedIn"
    )
      custom-button(
        :disabled="saving || (job.content === newContent)"
        @click="publish"
      ) Publicar

    // Cria margem no final da página quando tiver a barra de publicação
    .h-10(v-show="isLoggedIn")
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
    const { isLoggedIn } = useAuth($fire)
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
      saving,
      isLoggedIn,
      newContent,
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

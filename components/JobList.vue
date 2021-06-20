<template lang="pug">
  .job-list.flex.flex-wrap.justify-center
    job-card(
      v-for="job in jobs"
      :key="job.id"
      :job="job"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Job } from '~/types'

@Component
export default class JobContent extends Vue {
  @Prop(Array) jobs: Job[] | undefined
}
</script>

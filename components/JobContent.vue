<template lang="pug">
  .job-content(v-html="job.content")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Job } from '~/types'

@Component
export default class JobContent extends Vue {
  @Prop(Object) job: Job | undefined
}
</script>

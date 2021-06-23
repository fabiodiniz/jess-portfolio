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

@Component
export default class JobList extends Vue {
  @Prop(Array) readonly jobs?: Job[]
}
</script>

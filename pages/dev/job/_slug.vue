<template lang="pug">
  .flex.flex-col.items-center.w-full(
    :class="{ 'animate-pulse': loadingJobs }"
  )
    main-header

    horizontal-line

    page-detail(:title="currentJob.title")

    job-content(:job="currentJob")
</template>

<script lang="ts">
import { useContext } from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useJobs from '~/composables/useJobs'

@Component({
  setup () {
    const { $fire, route } = useContext()
    const ctx = useJobs($fire)

    ctx.fetchJob(route.value.params.slug)

    return { ...ctx }
  },
})
export default class Job extends Vue {}
</script>

<template lang="pug">
  .flex.flex-col.items-center.items-stretch.w-full(
    :class="{ 'animate-pulse': loadingJobs }"
  )
    main-header

    horizontal-line

    page-detail(:title="currentJob.title")

    job-content(:job="currentJob")
</template>

<script lang="ts">
import {
  useContext,
  useFetch,
  onActivated,
} from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useJobs from '~/composables/useJobs'

@Component({
  setup () {
    const { $fire, route } = useContext()
    const slug = route.value.params.slug
    const jobsCtx = useJobs($fire)
    const currentJob = jobsCtx.getComputedJob(slug)

    useFetch(async () => {
      await jobsCtx.fetchJob(slug)
    })

    onActivated(() => {
      jobsCtx.fetchJob(slug)
    })

    return { ...jobsCtx, currentJob }
  },
})
export default class JobPage extends Vue {}
</script>

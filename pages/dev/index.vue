<template lang="pug">
  .flex.flex-col.items-center.w-full(
    :class="{ 'animate-pulse': loadingJobs }"
  )
    main-header

    horizontal-line

    job-list(:jobs="jobs")
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
    const { $fire } = useContext()
    const jobsCtx = useJobs($fire)
    const jobs = jobsCtx.getComputedJobs

    useFetch(async () => {
      await jobsCtx.fetchJobs()
    })

    onActivated(() => {
      jobsCtx.fetchJobs()
    })

    return { ...jobsCtx, jobs }
  },
})
export default class HomePage extends Vue {}
</script>

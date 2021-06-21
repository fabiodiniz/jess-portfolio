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
import {
  useContext,
  useFetch,
  ref,
  Ref,
} from '@nuxtjs/composition-api'
import { Vue, Component } from 'nuxt-property-decorator'
import useJobs from '~/composables/useJobs'

@Component({
  setup () {
    const { $fire, route } = useContext()
    const slug = route.value.params.slug
    const ctx = useJobs($fire)
    const currentJob = ref({} as Job)

    useFetch(async () => {
      currentJob.value = await ctx.fetchJob(slug) as Job
    })

    return { ...ctx, currentJob }
  },
})
export default class Job extends Vue {}
</script>

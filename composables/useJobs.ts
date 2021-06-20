import {
  Ref,
  ref,
  useFetch,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { jobs } from '~/store'
import { Job } from '~/types'

export default function ($fire: NuxtFireInstance, autoload: boolean = false) {
  const loadingJobs: Ref<boolean> = ref(false)
  const getJobs: Ref<Job[]> = ref([])

  const fetchCollection = async (): Promise<Job[]> => {
    const jobs = await $fire
      .firestore
      .collection('jobs')
      .get()

    return jobs
      .docs
      .map((job) => {
        return {
          id: job.id,
          ...job.data(),
        } as Job
      })
  }

  const { fetch } = useFetch(async () => {
    if (autoload) {
      const jobDocs = await fetchCollection()
      jobs.setJobs(jobDocs)
      getJobs.value = jobs.getJobs
    }
  })

  return {
    loadingJobs,
    getJobs,
    fetchJobs: fetch,
  }
}

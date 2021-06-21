import {
  Ref,
  ref,
  useFetch,
  onBeforeUnmount,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { jobs } from '~/store'
import { Job } from '~/types'

export default function ($fire: NuxtFireInstance, autoload: boolean = false) {
  const loadingJobs: Ref<boolean> = ref(false)
  const getJobs: Ref<Job[]> = ref([])
  const currentJob: Ref<Job | object> = ref({})

  const fetchCollection = async (): Promise<Job[]> => {
    loadingJobs.value = true

    const jobs = await $fire
      .firestore
      .collection('jobs')
      .get()

    loadingJobs.value = false

    return jobs
      .docs
      .map((job) => {
        return {
          id: job.id,
          ...job.data(),
        } as Job
      })
  }

  const fetchJob = async (slug: string) => {
    loadingJobs.value = true

    const job = await $fire
      .firestore
      .collection('jobs')
      .where('slug', '==', slug)
      .get()

    const unsubscribe = job
      .docs[0]
      .ref
      .onSnapshot((snapshot: any) => {
        console.log('onSnapshot', snapshot)
      })

    onBeforeUnmount(unsubscribe)

    loadingJobs.value = false
    currentJob.value = job.docs[0].data() as Job

    return currentJob.value
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
    currentJob,
    fetchJob,
    fetchJobs: fetch,
  }
}

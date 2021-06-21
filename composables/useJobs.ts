import {
  ref,
  useFetch,
  // onDeactivated,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { jobs as jobsStore } from '~/store'
import { Job } from '~/types'

export default function ($fire: NuxtFireInstance, autoload: boolean = false) {
  const loadingJobs = ref(false)
  const getJobs = ref([] as Job[])

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
          uid: job.id,
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

    const jobRef = job.docs[0].ref
    const snapshot = await jobRef.get()
    const jobData = {
      uid: snapshot.id,
      ...snapshot.data(),
    } as Job

    jobsStore.setJob(jobData)

    // const unsubscribe = jobRef
    jobRef.onSnapshot((snapshot) => {
      const job = {
        uid: snapshot.id,
        ...snapshot.data(),
      } as Job

      jobsStore.setJob(job)
    })
    // onDeactivated(unsubscribe)

    loadingJobs.value = false

    return jobData
  }

  const { fetch } = useFetch(async () => {
    if (autoload) {
      const jobDocs = await fetchCollection()
      jobsStore.setJobs(jobDocs)
      getJobs.value = jobsStore.getJobs
    }
  })

  return {
    loadingJobs,
    getJobs,
    fetchJob,
    fetchJobs: fetch,
    getJob: jobsStore.getJob,
  }
}

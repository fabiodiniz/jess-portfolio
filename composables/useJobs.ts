import {
  computed,
  // onDeactivated,
  ref,
} from '@nuxtjs/composition-api'
import { NuxtFireInstance } from '@nuxtjs/firebase'
import { jobs as jobsStore } from '~/store'

export default function ($fire: NuxtFireInstance) {
  const loadingJobs = ref(false)

  const fetchJob = async (slug: string) => {
    loadingJobs.value = true

    const jobQuery = await $fire
      .firestore
      .collection('jobs')
      .where('slug', '==', slug)
      .get()

    const jobRef = jobQuery.docs[0].ref
    const snapshot = await jobRef.get()
    const jobData = {
      uid: snapshot.id,
      ...snapshot.data(),
    } as Job

    jobsStore.setJob(jobData)

    if (process.browser) {
      // const unsubscribe = jobRef.onSnapshot((snapshot) => {
      jobRef.onSnapshot((snapshot) => {
        const newJob = {
          uid: snapshot.id,
          ...snapshot.data(),
        } as Job

        jobsStore.setJob(newJob)
      })

      // onDeactivated(unsubscribe)
    }

    loadingJobs.value = false

    return jobsStore.getJob(slug)
  }

  const fetchJobs = async () => {
    loadingJobs.value = true

    const jobDocs = await fetchCollection()
    jobsStore.setJobs(jobDocs)

    loadingJobs.value = false

    return jobsStore.getJobs
  }

  const fetchCollection = async () => {
    const jobs = await $fire
      .firestore
      .collection('jobs')
      .orderBy('position')
      .get()

    return jobs
      .docs
      .map((job) => {
        return {
          uid: job.id,
          ...job.data(),
        } as Job
      })
  }

  const updateJob = async (job: Job) => {
    if (!job) return false

    try {
      const jobQuery = await $fire
        .firestore
        .collection('jobs')
        .where('slug', '==', job.slug || '')
        .get()

      return jobQuery
        .docs[0]
        .ref
        .set({ ...job })
    }
    catch (e) {
      return false
    }
  }

  const getComputedJobs = computed({
    get: () => jobsStore.getJobs || [] as Job[],
    set: () => {},
  })

  const getComputedJob = (slug: string) => computed({
    get: () => jobsStore.getJob(slug) || {} as Job,
    set: () => {},
  })

  return {
    loadingJobs,
    updateJob,
    fetchJob,
    fetchJobs,
    getComputedJob,
    getComputedJobs,
  }
}

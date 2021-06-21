import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Job } from '~/types'

@Module({
  name: 'Jobs',
  stateFactory: true,
  namespaced: true,
})
class User extends VuexModule {
  jobs: Job[] = []

  @Mutation
  setJobs (jobs: Job[]) {
    this.jobs = jobs
  }

  @Mutation
  setJob (job: Job) {
    const jobIndex = this.jobs
      .findIndex(j => j?.uid === job?.uid)

    if (jobIndex === -1) {
      this.jobs.push(job)
    } else {
      this.jobs = this.jobs
        .map((j, i) => i === jobIndex ? job : j)
    }
  }

  @Mutation
  getJob (slug: string): Job | undefined {
    return this.jobs
      .find(job => job?.slug === slug)
  }

  get getJobs (): Job[] {
    return this.jobs
  }
}

export default User

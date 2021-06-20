import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Job } from '~/types'
// import { vuexfireMutations, firestoreAction } from 'vuexfire'

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

  @Action
  fetchJobs (): Job[] {
    return []
  }

  @Action
  getJob (slug: string): Job | undefined {
    return this.getJobs
      .find(job => job?.slug === slug)
  }

  get getJobs (): Job[] {
    return this.jobs
  }
}

export default User

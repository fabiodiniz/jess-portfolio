import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/User'
import Jobs from '~/store/Jobs'

let user: User
let jobs: Jobs

function initialiseStores (store: Store<any>): void {
  user = getModule(User, store)
  jobs = getModule(Jobs, store)
}

export { initialiseStores, user, jobs }

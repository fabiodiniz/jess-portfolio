import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import User from '~/store/User'

let user: User

function initialiseStores (store: Store<any>): void {
  user = getModule(User, store)
}

export { initialiseStores, user }
